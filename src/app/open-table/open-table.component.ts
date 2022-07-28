import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from '../table/table.model';
import { DataVispur, VisitPurpose } from '../visit-purpose/visit-purpose.model';

@Component({
  selector: 'app-open-table',
  templateUrl: './open-table.component.html',
  styleUrls: ['./open-table.component.css']
})
export class OpenTableComponent implements OnInit {

  selectedVispur!: VisitPurpose;

  constructor(
    public dialogRef: MatDialogRef<OpenTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table,
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onGotoOrder(redirect = false) {
    return {
      tableID: this.data.tableID,
      tableTypeID: this.data.tableTypeID,
      tableName: this.data.tableName,
      redirect
    }
  }

  onClickVispur(vispur: any) {
    this.selectedVispur = vispur
  }

  disabledButton() {
    if (this.selectedVispur) {
      return false
    }
    return true;
  }

}
