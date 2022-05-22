import { Component, OnInit } from '@angular/core';
import { NzTimelineMode } from 'ng-zorro-antd/timeline';
import { TimeLine } from './timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  mode: NzTimelineMode = 'left';
  constructor() { }
  listTimeline: TimeLine[] = []
  ngOnInit(): void {
  }

  init() {
    this.listTimeline = []
  }

}
