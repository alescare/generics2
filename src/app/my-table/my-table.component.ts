import {Component, OnInit, Input} from '@angular/core';
import {MyTableConfig} from "../interface/MyTableConfig";
import {MyButtonConfig} from "../interface/MyButtonConfig";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() myConfig!: MyTableConfig;
   myButtonConfigModifica!: MyButtonConfig;
   myButtonConfigElimina!: MyButtonConfig;


  constructor() {
  }

  ngOnInit(): void {
    this.myButtonConfigModifica= {
      text: 'Modifica',
      customCssClass: 'btn btn-warning',
      icon: 'edit'
    };
    this.myButtonConfigElimina= {
      text: 'Elimina',
      customCssClass: 'btn btn-danger',
      icon: 'delete'
    }
    console.log(this.myConfig)
  }

}
