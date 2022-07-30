import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';
import { DataVispur } from './visit-purpose.model';

@Component({
  selector: 'app-visit-purpose',
  templateUrl: './visit-purpose.component.html',
  styleUrls: ['./visit-purpose.component.css']
})
export class VisitPurposeComponent implements OnInit {
  @Input() color!: string;
  @Output() clickVispur = new EventEmitter;
  onDestroy$ = new Subject<void>();
  dataVispur!: DataVispur;
  btnSelected: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.vispur().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((data: DataVispur) => {
      this.dataVispur = data
    })
  }

  onClickVispur(vispur: any) {
    localStorage.setItem("visitPurpose", vispur.visitPurposeName)
    this.clickVispur.emit(vispur);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
