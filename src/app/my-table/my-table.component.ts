import {Component, OnInit, Input} from '@angular/core';
import {MyTableConfig} from "../interface/MyTableConfig";


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() myConfig!: MyTableConfig;
  @Input() data!: any[];
  filter!: string;
  filterColumn!: string;
  currentPage!: number;


  constructor() {
  }

  ngOnInit(): void {
    this.filter = '';
    this.filterColumn = '';
    this.currentPage = 1;
  }


  indexSlidingWindow(index: number): boolean {

    if (this.currentPage < 3) {
      return index < 5;
    }
    return (index > this.currentPage - 3) && (index < this.currentPage + 3);
  }

}
