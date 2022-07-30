import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeTableComponent } from '../change-table/change-table.component';
import { ChangeVispurComponent } from '../change-vispur/change-vispur.component';
import { Table } from '../table/table.model';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() table!: Table;
  eventClick: boolean = false;
  selectedMenu!: Order;
  selectedVispur!: any;
  selectedTable!: any;
  counterQty = 0
  hoverMenuClass!: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    let getVispur = localStorage.getItem('visitPurpose');
    this.selectedVispur = getVispur;

    let getTable = localStorage.getItem('dataTable')
    this.selectedTable = getTable;
  }

  onClickItem(menu: any) {
    this.counterQty += 1;
    this.selectedMenu = {
      menuID: menu.menuID,
      menuShortName: menu.menuShortName,
      price: menu.price,
      qty: this.counterQty
    }
    this.hoverMenu();
  }

  hoverMenu() {
    this.hoverMenuClass = 'order-list-content'
  }

  onSelectedVispur(vispur: any) {
    this.selectedVispur = vispur
  }

  onChangeVispur() {
    const dialogRef = this.dialog.open(ChangeVispurComponent, {
      disableClose: false
    })
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { changeVispur } = result
        this.selectedVispur = changeVispur.visitPurposeName
        localStorage.setItem('visitPurpose', changeVispur.visitPurposeName)
      }
    })
  }

  onChangeTable() {
    const data: Table = {
      tableName: this.selectedTable
    }
    const dialogRef = this.dialog.open(ChangeTableComponent, {
      disableClose: false,
      data
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { changeTable } = result
        this.selectedTable = changeTable.tableName
        localStorage.setItem('dataTable', changeTable.tableName)
      }
    })
  }
}
