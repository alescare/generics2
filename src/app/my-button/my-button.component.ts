import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from "../interface/MyButtonConfig";

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() myConfig!: MyButtonConfig;

  constructor() { }

  ngOnInit(): void {
    console.log(this.myConfig)
  }

}
