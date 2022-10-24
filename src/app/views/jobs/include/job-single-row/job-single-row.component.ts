import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../../../interfaces/jobs/Job";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-job-single-row',
  templateUrl: './job-single-row.component.html',
  styleUrls: ['./job-single-row.component.scss']
})
export class JobSingleRowComponent implements OnInit {
  @Input() job?: Job;

  constructor() {
  }

  domainUrl = environment.domainUrl;

  ngOnInit(): void {
  }

}
