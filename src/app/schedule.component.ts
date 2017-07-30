import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flow } from './schedule';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'my-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: [
  './schedule.component.css'
  ]
})
export class ScheduleComponent implements OnInit{

  flows: Flow[];
  nextIndex: number;
  flow = new Flow(0, '', '', '', '');


  constructor(
    private scheduleService: ScheduleService,
    private router: Router
    ) { }

  getFlows(): void {
    this.scheduleService.getFlows()
    .then(flows => {
    this.flows = flows;
    this.nextIndex = this.flows.length;
    });
  }

  onSubmit(): void {
    this.flow.id = this.nextIndex + 1;
    this.nextIndex = this.flow.id.valueOf();
    this.scheduleService.create(this.flow)
    .then( flow => {this.flows.push(this.flow);});
  }

  ngOnInit(): void {
    this.getFlows();
  }
}
