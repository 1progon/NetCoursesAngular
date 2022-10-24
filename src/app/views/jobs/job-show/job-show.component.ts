import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JobsService} from "../../../services/jobs/jobs.service";
import {Job} from "../../../interfaces/jobs/Job";
import {Status} from "../../../enums/Status";
import {Response} from "../../../interfaces/response/Response";
import {HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-job-show',
  templateUrl: './job-show.component.html',
  styleUrls: ['./job-show.component.scss']
})
export class JobShowComponent implements OnInit {

  id?: string;
  job?: Job;
  activeJobStatus: Status = Status.Active;
  statuses: typeof Status = Status;
  domainUrl = environment.domainUrl;


  constructor(private route: ActivatedRoute,
              private jobService: JobsService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: value => {
        this.id = value['id'];

        this.jobService.getJob(value['id'])
          .subscribe({
            next: (response: Response<Job>) => {
              if (response.responseCode != 200) {
                console.log(response);
                return;
              }
              this.job = response.data;
            },
            error: (err: HttpErrorResponse) => {
              if (err.status == 404) {
                this.router.navigateByUrl('/404').finally();
              }
            }
          })


      }
    })

  }

}
