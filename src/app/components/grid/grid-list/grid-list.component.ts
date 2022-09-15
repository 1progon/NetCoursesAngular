import {Component, Input, OnInit} from '@angular/core';
import {BaseItem} from "../../../interfaces/BaseItem";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  @Input() items: BaseItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
