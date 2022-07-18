import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Menu, DataMenu, MenuEditData } from '../menu/menu.model';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MenuEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Menu
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
