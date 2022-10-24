import {Component, OnInit} from '@angular/core';
import {JobsService} from "../../../services/jobs/jobs.service";
import {PostJobDto} from "../../../dto/jobs/postJobDto";
import {Router} from "@angular/router";
import {Job} from "../../../interfaces/jobs/Job";
import {Response} from "../../../interfaces/response/Response";

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  jobForm: PostJobDto = <PostJobDto>{};
  minLength = 5;
  companyMinLength = 3;
  fileLogo: File = <File>{};

  constructor(private jobService: JobsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submitForm() {

    this.jobService.postJob(this.jobForm, this.fileLogo)
      .subscribe({
        next: (response: Response<Job>) => {
          if (response.responseCode == 200) {
            this.router.navigateByUrl('/jobs/' + response.data.id).finally();
          }
        }
      })
  }

  onFileChange(e: Event) {
    let files = (<HTMLInputElement>e.target).files;
    if (files?.[0]) {
      this.fileLogo = files[0];
    }
  }
}
