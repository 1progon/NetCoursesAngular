import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../interfaces/courses/Course";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() courses: Course[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
