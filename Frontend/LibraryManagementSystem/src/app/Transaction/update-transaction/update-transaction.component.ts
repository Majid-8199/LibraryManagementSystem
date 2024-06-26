import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../../Services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { transaction } from '../../Interface/transaction';
import { BookService } from '../../Services/book.service';
import { CustomerService } from '../../Services/customer.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrl: './update-transaction.component.css'
})
export class UpdateTransactionComponent implements OnInit{

  TransactionId:any;
  Transaction!:any;

  constructor(private service:TransactionService, private bookService:BookService, private customerService:CustomerService, private router:Router, private route: ActivatedRoute){  }
  
  @ViewChild('myform') myform!:NgForm ;

  ngOnInit(): void {
    this.TransactionId=this.route.snapshot.paramMap.get('id');
    this.Transaction=this.service.getById(this.TransactionId).subscribe(e=>this.Transaction=e);
  }

  updateTransactionById(id: number, transaction: transaction){
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
        this.service.updateById(id,transaction).subscribe(()=>{
        this.router.navigate(['transactionlist']);
        alert("Transaction Added Successfully!");
        });
      }
    });
  }

  goBack(){
    this.router.navigate(["/transactionlist"]);
  }
}


