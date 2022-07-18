import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuEditComponent } from '../menu-edit/menu-edit.component';
import { Menu, MenuEditData, DataMenu } from '../menu/menu.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() salesMenu: any;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onEditOrder(salesMenu: any) {
    const data: Menu = {
      menuID: salesMenu.menuID,
      menuShortName: salesMenu.menuShortName,
      price: salesMenu.price
    }
    const dialogRef = this.dialog.open(MenuEditComponent, {
      width: '250px',
      disableClose: false,
      data
    })
    dialogRef.afterClosed().subscribe(result => {
      this.salesMenu = result
    })
  }

}
