import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';
import { TableSection } from '../table/table.model';

@Component({
  selector: 'app-grid-move-table',
  templateUrl: './grid-move-table.component.html',
  styleUrls: ['./grid-move-table.component.css']
})
export class GridMoveTableComponent implements OnInit {
  @Output() clickTable = new EventEmitter
  onDestroy$ = new Subject<void>();
  dataTable!: TableSection[]
  tableSection!: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.tables().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((data: TableSection[]) => {
      this.dataTable = data
    });
  }

  onClickTable(item: any) {
    this.clickTable.emit(item)
  }

  onSelectionTable(tableSection: any) {
    this.tableSection = tableSection.tableSectionID
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
