import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableSection, Table } from '../table/table.model';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-change-table',
  templateUrl: './change-table.component.html',
  styleUrls: ['./change-table.component.css']
})
export class ChangeTableComponent implements OnInit {
  
  selectedTable!: Table

  constructor(
    public dialogRef: MatDialogRef<ChangeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table,
    private tableService: TableService,
  ) { }

  ngOnInit(): void {
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

  disableButton() {
    if (this.selectedTable) {
      return false;
    }
    return true;
  }
}
