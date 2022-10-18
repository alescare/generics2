import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
