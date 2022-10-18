import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./interface/MyButtonConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'generics2';

  myButtonConfig!: MyButtonConfig;

  ngOnInit(): void {
    this.myButtonConfig= {
      text: 'Testo',
      customCssClass: 'btn btn-primary',
      icon: 'assignment'
    }
  }

}
