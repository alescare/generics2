import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./interface/MyButtonConfig";
import {MyTableConfig} from "./interface/MyTableConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'generics2';

  myButtonConfigAggiungi!: MyButtonConfig;
  myTableConfig!: MyTableConfig;

  ngOnInit(): void {
    this.myButtonConfigAggiungi= {
      text: 'Aggiungi',
      customCssClass: 'btn btn-success',
      icon: 'assignment'
    };
    this.myTableConfig= {
      headers: [
        {key: 'nome', label: 'Nome'},
        {key: 'cognome', label: 'Cognome'},
        {key: 'username', label: 'Username'},
        {key: 'email', label: 'Email'},
        {key: 'modifica', label: ''},
        {key: 'elimina', label: ''},
      ],
      actions: [],
      order: {defaultColumn: '', orderType: ''},
      search: {columns: []},
      pagination: {itemPerPage: 5, itemPerPageOptions: []}

    }
  }

}
