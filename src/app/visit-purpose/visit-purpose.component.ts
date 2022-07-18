import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataVispur } from './visit-purpose.model';
import { VisitPurposeService } from './visit-purpose.service';

@Component({
  selector: 'app-visit-purpose',
  templateUrl: './visit-purpose.component.html',
  styleUrls: ['./visit-purpose.component.css']
})
export class VisitPurposeComponent implements OnInit {
  @Input() color!: string;
  @Output() clickVispur = new EventEmitter;
  dataVispur!: DataVispur;
  btnSelected: any;

  constructor(
    private postDataVispurt: VisitPurposeService
  ) { }

  ngOnInit(): void {
    this.postDataVispurt.getVispur().subscribe((result: DataVispur) => {
      this.dataVispur = result;
    })
  }

  onClickVispur(vispur: any) {
    localStorage.setItem("visitPurpose", vispur.visitPurposeName)
    this.clickVispur.emit(vispur);
  }

}
