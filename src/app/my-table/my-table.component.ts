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
  filteredData!: any[];
  filter!: string;
  filterColumn!: string;


  constructor() {
  }

  ngOnInit(): void {
    this.filteredData = this.data;
  }

  order(column: string): void {
    this.myConfig.order.defaultColumn = column;
    let order = this.myConfig.order.orderType;

    if (order === 'DESC') {
      this.myConfig.order.orderType = 'ASC';
    } else {
      this.myConfig.order.orderType = 'DESC';
    }
    this.data.sort(function (a, b) {
      let x = a[column];
      let y = b[column];
      if (order === 'DESC') {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
      } else {
        if (x < y) {
          return 1;
        }
        if (x > y) {
          return -1;
        }
      }
      return 0;
    });
  }

  searchByColumnAndFilter(column: string, filter: string): void {
    if ((column !== '') && (filter !== '')) {
      this.filteredData = this.data.filter(item => item[column].includes(filter));
    } else {
      this.filteredData = this.data;
    }
  }

}
