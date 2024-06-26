import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../Services/customer.service';
import { Router } from '@angular/router';
import { customer } from '../../Interface/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit{
 

  @ViewChild('myform') myform!:NgForm ;

  constructor(private service:CustomerService,private router:Router){
  }

  ngOnInit(): void {
  }

  addBook(customer:customer){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
    }
    else{
      this.service.add(customer).subscribe();
      this.router.navigate(['customerlist']);
      alert("Customer Added Successfully!");
    }
  }
}   