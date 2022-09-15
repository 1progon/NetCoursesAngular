import {Component, OnInit} from '@angular/core';
import {Job} from "../../../interfaces/jobs/Job";
import {JobsService} from "../../../services/jobs/jobs.service";

@Component({
  selector: 'app-jobs-index',
  templateUrl: './jobs-index.component.html',
  styleUrls: ['./jobs-index.component.scss']
})
export class JobsIndexComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService) {
  }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe({
      next: value => {

        this.jobs = value.data.items;
        this.jobs.forEach(job => {
          job.createdAt = new Date(job.createdAt).toDateString();
          job.updatedAt = new Date(job.updatedAt).toDateString();
        })

      }
    })

  }


}
