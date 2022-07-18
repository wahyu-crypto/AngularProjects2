import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataMenu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() clickItem = new EventEmitter();
  @Input() itemColumn: any;
  @Input() itemRow: any;
  dataMenu!: DataMenu;
  btnContainerStyle: any;

  constructor(
    private postData: MenuService
  ) { }

  ngOnInit(): void {
    this.postData.getMenus().subscribe((result: DataMenu) => {
      this.dataMenu = result
    })
    this.initStyle();
  }
  
  onClickItem(menu: any) {
    this.clickItem.emit(menu);
  }

  initStyle() {
    this.btnContainerStyle = {
      'width': `calc((100% / ${this.itemColumn}) - 10px)`,
      'height': `calc((100% / ${this.itemRow}) - 10px)`,
      'max-height': `calc((100% / ${this.itemRow}) - 10px)`
    }
  }

}
