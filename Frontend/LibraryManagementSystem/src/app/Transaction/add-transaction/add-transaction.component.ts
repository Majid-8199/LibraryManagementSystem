import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionService } from '../../Services/transaction.service';
import { Router } from '@angular/router';
import { transaction } from '../../Interface/transaction';
import { BookService } from '../../Services/book.service';
import { CustomerService } from '../../Services/customer.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent implements OnInit{
 

  @ViewChild('myform') myform!:NgForm ;

  constructor(private transactionService:TransactionService,private bookService:BookService,private customerService:CustomerService,private router:Router){
  }

  ngOnInit(): void {
  }



  addTransaction(transaction:transaction){
    const checkBook=this.bookService.checkBookById(this.myform.value.bookID)
    const checkCustomer=this.customerService.checkCustomer(this.myform.value.customerID)
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }
    forkJoin([checkBook,checkCustomer]).pipe().subscribe(([checkBook,checkCustomer])=>{
      if(!checkBook){
        alert("Book ID not found! Enter a valid Book ID.")
      }
      else if(!checkCustomer){
        alert("Customer ID not found! Enter a valid Customer ID.")
      }
      else{
        this.transactionService.add(transaction).subscribe(()=>{
          this.router.navigate(['transactionlist']);
          alert("Transaction Added Successfully!");
        });
      }
    });
  }
}   
