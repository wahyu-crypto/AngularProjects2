import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataTable, Table } from '../table/table.model';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-change-table',
  templateUrl: './change-table.component.html',
  styleUrls: ['./change-table.component.css']
})
export class ChangeTableComponent implements OnInit {
  
  dataTable!: DataTable
  selectedTable!: DataTable

  constructor(
    public dialogRef: MatDialogRef<ChangeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table,
    private tableService: TableService,
  ) { }

  ngOnInit(): void {
    this.tableService.getTable().subscribe((result: DataTable) => {
      this.dataTable = result
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onClickTable(table: any) {
    this.selectedTable = table
  }

  onChangeTable(redirect = false) {
    return {
      changeTable: this.selectedTable,
      redirect
    }
  }
}
