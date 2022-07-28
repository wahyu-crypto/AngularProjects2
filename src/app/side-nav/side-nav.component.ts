import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter;
  @Output() clickMenu = new EventEmitter;
    @Input() expandMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  onBurgerMenu() {
    this.toggleSidenav.emit();
  }

}
