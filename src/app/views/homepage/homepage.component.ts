import {Component, OnInit} from '@angular/core';
import {Job} from "../../interfaces/jobs/Job";
import {HomepageService} from "../../services/homepage.service";
import {Course} from "../../interfaces/courses/Course";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  jobs: Job[] = [];
  courses: Course[] = [];

  constructor(private homepageService: HomepageService) {
  }

  ngOnInit(): void {
    this.homepageService.homepage().subscribe({
      next: value => {
        this.jobs = value.data.jobs;
        this.courses = value.data.courses;

        this.jobs.forEach(job => {
          job.createdAt = new Date(job.createdAt).toDateString();
          job.updatedAt = new Date(job.updatedAt).toDateString();
        })
      }
    });

  }

}
