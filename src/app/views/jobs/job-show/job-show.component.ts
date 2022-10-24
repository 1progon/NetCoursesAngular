import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JobsService} from "../../../services/jobs/jobs.service";
import {Job} from "../../../interfaces/jobs/Job";

@Component({
  selector: 'app-job-show',
  templateUrl: './job-show.component.html',
  styleUrls: ['./job-show.component.scss']
})
export class JobShowComponent implements OnInit {

  id?: string;
  job?: Job;


  constructor(private route: ActivatedRoute,
              private jobService: JobsService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: value => {
        this.id = value['id'];

        this.jobService.getJob(value['id']).subscribe({
          next: response => {
            console.log(response)
            this.job = response.data;
          }
        })


      }
    })

  }

}
