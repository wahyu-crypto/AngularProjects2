import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../order/order.model';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MenuEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onEditMenu(qty: any, redirect = false) {
    return {
      menuID: this.data.menuID,
      menuShortName: this.data.menuShortName,
      price: this.data.price,
      qty: qty,
      redirect
    }
  }
}
