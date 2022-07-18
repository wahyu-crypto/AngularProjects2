import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OpenTableComponent } from '../open-table/open-table.component';
import { DataTable, Table } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() table!: any;
  @Output() clickTable = new EventEmitter;
  dataTable!: DataTable;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postDataTable: TableService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.postDataTable.getTable().subscribe((result: DataTable) => {
      this.dataTable = result
    })
  }

  onClickTable(table: any) {
    const data: Table = {
      tableID: table.tableID,
      tableTypeID: table.tableTypeID,
      tableName: table.tableName,
    }
    const dialogRef = this.dialog.open(OpenTableComponent, {
      disableClose: false,
      data
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { tableID, tableTypeID, tableName, redirect } = result;
        const tableData: Table = {
          tableID: tableID,
          tableTypeID: tableTypeID,
          tableName: tableName
        };
        if (redirect) {
          this.router.navigate(["order"], { relativeTo: this.route})
        }
        localStorage.setItem('dataTable', tableName)
      }
    })
    this.clickTable.emit(table);
  }

}
