import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  check:any;
  customerid!:number;
  CustomerList:any;
  constructor(private service:CustomerService, private router:Router){}

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>this.CustomerList=data);
  }

  deleteCustomerById(id:number){
    this.service.deleteById(id).subscribe();
    window.location.reload();
  }

  updateCustomerById(id: number) {
    this.router.navigate(['/updatecustomer', id]);
  }

  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }

  searchCustomer(id: number) {
    this.service.checkCustomer(id).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/searchcustomer', id]);
        } else {
          alert("Customer not found!");
        }
      }
    );
  }
}

