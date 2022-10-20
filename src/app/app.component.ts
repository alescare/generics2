import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./interface/MyButtonConfig";
import {MyTableConfig} from "./interface/MyTableConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'generics2';

  myTableConfig!: MyTableConfig;
  data!: any[];


  ngOnInit(): void {

  }

}
