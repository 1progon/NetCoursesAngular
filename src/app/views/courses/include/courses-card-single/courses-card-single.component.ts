import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../interfaces/courses/Course";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-courses-card-single',
  templateUrl: './courses-card-single.component.html',
  styleUrls: ['./courses-card-single.component.scss']
})
export class CoursesCardSingleComponent implements OnInit {
  @Input() course: Course = <Course>{};

  constructor() {
  }

  domainUrl = environment.domainUrl;

  ngOnInit(): void {
  }

}
