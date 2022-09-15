import {Component, Input, OnInit} from '@angular/core';
import {BaseItem} from "../../../interfaces/BaseItem";

@Component({
  selector: 'app-grid-single',
  templateUrl: './grid-single.component.html',
  styleUrls: ['./grid-single.component.scss']
})
export class GridSingleComponent implements OnInit {
  @Input() item: BaseItem = <BaseItem>{}

  constructor() {
  }

  ngOnInit(): void {
  }

}
