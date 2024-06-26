import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { UpdateBookComponent } from './Book/update-book/update-book.component';
import { ViewBookComponent } from './Book/view-book/view-book.component';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { SearchBookComponent } from './Book/search-book/search-book.component';
import { SearchCustomerComponent } from './Customer/search-customer/search-customer.component';
import { AddTransactionComponent } from './Transaction/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './Transaction/update-transaction/update-transaction.component';
import { SearchTransactionComponent } from './Transaction/search-transaction/search-transaction.component';
import { ViewTransactionComponent } from './Transaction/view-transaction/view-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddBookComponent,
    UpdateBookComponent,
    ViewBookComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    SearchBookComponent,
    SearchCustomerComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    SearchTransactionComponent,
    ViewTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
