import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';
import { DataMenu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  onDestroy$ = new Subject<void>();
  @Output() clickItem = new EventEmitter();
  @Input() itemColumn: any;
  @Input() itemRow: any;
  dataMenu!: DataMenu;
  btnContainerStyle: any;
  widthExp: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.menus().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((data: DataMenu) => {
        this.dataMenu = data
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
      'max-height': `calc((100% / ${this.itemRow}) - 10px)`,
      'margin': `10px 10px 0 0`
    }
  }

}
