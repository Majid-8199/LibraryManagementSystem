import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBookComponent } from './Book/view-book/view-book.component';
import { AddBookComponent } from './Book/add-book/add-book.component';
import { UpdateBookComponent } from './Book/update-book/update-book.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { SearchBookComponent } from './Book/search-book/search-book.component';
import { SearchCustomerComponent } from './Customer/search-customer/search-customer.component';
import { ViewTransactionComponent } from './Transaction/view-transaction/view-transaction.component';
import { AddTransactionComponent } from './Transaction/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './Transaction/update-transaction/update-transaction.component';
import { SearchTransactionComponent } from './Transaction/search-transaction/search-transaction.component';

const routes: Routes = [
  {path:"booklist",component:ViewBookComponent},
  {path:"addbook",component:AddBookComponent},
  {path:"updatebook/:id",component:UpdateBookComponent},
  {path:"searchbook/:BookName",component:SearchBookComponent},
  {path:"customerlist",component:ViewCustomerComponent},
  {path:"addcustomer",component:AddCustomerComponent},
  {path:"updatecustomer/:id",component:UpdateCustomerComponent},
  {path:"searchcustomer/:id",component:SearchCustomerComponent},
  {path:"transactionlist",component:ViewTransactionComponent},
  {path:"addtransaction",component:AddTransactionComponent},
  {path:"updatetransaction/:id",component:UpdateTransactionComponent},
  {path:"searchtransaction/:id",component:SearchTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
