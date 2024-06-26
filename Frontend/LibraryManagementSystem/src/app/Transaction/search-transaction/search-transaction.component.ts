import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../Services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { CustomerService } from '../../Services/customer.service';
import { transaction } from '../../Interface/transaction';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrl: './search-transaction.component.css'
})
export class SearchTransactionComponent implements OnInit{

  TransactionId!:number;
  TransactionID:any;
  transaction:any;
  book:any;
  customer:any;
  constructor(private service:TransactionService, private bookService:BookService, private customerService:CustomerService,private router:Router,private route:ActivatedRoute){ }
  ngOnInit(): void {
    this.TransactionID=this.route.snapshot.paramMap.get('id');
    this.service.getById(this.TransactionID).subscribe((e)=>{
      this.transaction=e;  
      if (this.transaction) {
        this.bookService.getById(this.transaction.bookID).subscribe((book) => this.book = book);
        this.customerService.getById(this.transaction.customerID).subscribe((customer) => this.customer = customer);
      }
    });
  }

  searchTransaction(id: number) {
    this.service.checkTransaction(id).subscribe(
      (result) => {
        if (result) {
          this.service.getById(id).subscribe(e=>this.transaction=e);
        } else {
          alert("Transaction not found!");
        }
      }
    );
  }

  deleteTransaction(id:number){
    this.service.deleteById(id).subscribe(()=>this.router.navigate(['/transactionlist']));
  }
  
  updateTransaction(id:number){
    this.router.navigate(['/updatetransaction',id]).then(()=>window.location.reload())
  }

}
