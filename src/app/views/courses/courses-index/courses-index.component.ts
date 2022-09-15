import {Component, OnInit} from '@angular/core';
import {Course} from "../../../interfaces/courses/Course";
import {CoursesService} from "../../../services/courses/courses.service";

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.scss']
})
export class CoursesIndexComponent implements OnInit {

  courses: Course[] = [];

  constructor(private service: CoursesService) {
  }

  ngOnInit(): void {
    this.service.getCourses().subscribe({
      next: value => {
        console.log(value);

        this.courses = value.data.items;
      }
    })
  }

}
