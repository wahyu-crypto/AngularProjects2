import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataVispur, VisitPurpose } from '../visit-purpose/visit-purpose.model';

@Component({
  selector: 'app-change-vispur',
  templateUrl: './change-vispur.component.html',
  styleUrls: ['./change-vispur.component.css']
})
export class ChangeVispurComponent implements OnInit {
  selectedVispur!: VisitPurpose;

  constructor(
    public dialogRef: MatDialogRef<ChangeVispurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VisitPurpose,
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onClickVispur(vispur: any) {
    this.selectedVispur = vispur;
  }

  onChangeVispur(redirect = false) {
    return {
      changeVispur: this.selectedVispur,
      redirect
    }
  }

  disableButton() {
    if (this.selectedVispur) {
      return false;
    }
    return true;
  }

}
