import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';

import {MatIconModule} from '@angular/material/icon';
import { MyTableComponent } from './my-table/my-table.component';
import { MyHeaderComponent } from './my-header/my-header.component';

import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from './pipe/filter-search.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { OrderPipe } from './pipe/order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    MyHeaderComponent,
    FilterSearchPipe,
    PaginationPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
