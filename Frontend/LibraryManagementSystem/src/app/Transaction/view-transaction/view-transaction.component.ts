import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../Services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.css'
})
export class ViewTransactionComponent implements OnInit{
  check:any;
  transactionid!:number;
  TransactionList:any;
  constructor(private service:TransactionService, private router:Router){}

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>this.TransactionList=data);
  }

  deleteTransactionById(id:number){
    this.service.deleteById(id).subscribe();
    window.location.reload();
  }

  updateTransactionById(id: number) {
    this.router.navigate(['/updatetransaction', id]);
  }

  addTransaction(){
    this.router.navigate(['/addtransaction']);
  }

  searchTransaction(id: number) {
    this.service.checkTransaction(id).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/searchtransaction', id]);
        } else {
          alert("Transaction not found!");
        }
      }
    );
  }
}

