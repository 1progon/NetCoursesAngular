import {Component, OnInit} from '@angular/core';
import {Job} from "../../../interfaces/jobs/Job";
import {JobsService} from "../../../services/jobs/jobs.service";

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  jobForm: Job = <Job>{
    company: {}
  }
  minLength = 5;
  companyMinLength = 3;

  constructor(private jobService: JobsService) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.jobForm)
    this.jobService.postJob(this.jobForm).subscribe({
      next: value => {
        console.log(value)
      }
    })
  }
}
