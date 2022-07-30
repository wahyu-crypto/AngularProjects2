import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableSection } from '../table/table.model';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-grid-move-table',
  templateUrl: './grid-move-table.component.html',
  styleUrls: ['./grid-move-table.component.css']
})
export class GridMoveTableComponent implements OnInit {
  @Output() clickTable = new EventEmitter
  dataTable!: TableSection[]
  tableSection!: any;

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.tableService.getTable().subscribe((result: TableSection[]) => {
      this.dataTable = result
    })
  }

  onClickTable(item: any) {
    this.clickTable.emit(item)
  }

  onSelectionTable(tableSection: any) {
    this.tableSection = tableSection.tableSectionID
  }

}
