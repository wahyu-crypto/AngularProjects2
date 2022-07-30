import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OpenTableComponent } from '../open-table/open-table.component';
import { DataService } from '../services/data.service';
import { TableSection, Table } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() table!: any;
  @Output() clickTable = new EventEmitter;
  onDestroy$ = new Subject<void>();
  dataTable!: TableSection[];
  tableSection!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postDataTable: TableService,
    private dataService: DataService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // this.postDataTable.getTable().pipe(
    //   takeUntil(this.onDestroy$)
    // ).subscribe((data: TableSection[]) => {
    //   this.dataTable = data
    // })

    this.dataService.getTable().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((data: TableSection[]) => {
      this.dataTable = data
      console.log(data)
    });
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

  onSelectionTable(tableSection: any) {
    this.tableSection = tableSection.tableSectionID
  }

  getTableLocation(table: any) {
    const top = Math.floor((table.posY / table.heightRes) * 100);
    const left = Math.floor((table.posX / table.widthRes) * 100);

    return {
      'top.%': top,
      'left.%': left
    };
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
