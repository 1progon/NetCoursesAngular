import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../interfaces/courses/Course";

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss']
})
export class CardSingleComponent implements OnInit {
  @Input() course: Course = <Course>{};

  constructor() {
  }

  ngOnInit(): void {
  }

}
