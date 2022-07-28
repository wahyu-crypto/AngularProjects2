import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuEditComponent } from '../menu-edit/menu-edit.component';
import { Menu, MenuEditData, DataMenu } from '../menu/menu.model';
import { Order } from '../order/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() salesMenu!: Order;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onEditOrder(salesMenu: any) {
    const data: Order = {
      menuID: salesMenu.menuID,
      menuShortName: salesMenu.menuShortName,
      price: salesMenu.price
    }
    const dialogRef = this.dialog.open(MenuEditComponent, {
      disableClose: false,
      data
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { menuID, menuShortName, price, qty, redirect } = result
        const data: Order = {
          menuID: menuID,
          menuShortName: menuShortName,
          price: price,
          qty: qty
        }
        this.salesMenu = data
      }
    })
  }

  onRemoveOrder() {
    
  }

}
