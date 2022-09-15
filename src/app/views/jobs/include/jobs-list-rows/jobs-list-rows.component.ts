import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../../../interfaces/jobs/Job";

@Component({
  selector: 'app-jobs-list-rows',
  templateUrl: './jobs-list-rows.component.html',
  styleUrls: ['./jobs-list-rows.component.scss']
})
export class JobsListRowsComponent implements OnInit {
  @Input() jobs: Job[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
