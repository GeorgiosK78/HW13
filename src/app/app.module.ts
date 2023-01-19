import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BookstoreService } from './bookstore.service';
import { OldestlatestComponent } from './oldestlatest/oldestlatest.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbooksComponent,
    OldestlatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
