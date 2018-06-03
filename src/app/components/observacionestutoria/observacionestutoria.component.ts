import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-observacionestutoria',
  templateUrl: './observacionestutoria.component.html',
  styleUrls: ['./observacionestutoria.component.css']
})
export class ObservacionestutoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  currentRate = 0;
  trato= 0;
}

export class NgbdDatepickerBasic {

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
