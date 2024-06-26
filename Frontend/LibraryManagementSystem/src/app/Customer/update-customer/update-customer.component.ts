import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../Services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { customer } from '../../Interface/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  customerId:any;
  customer!:any;

  constructor(private service:CustomerService,private router:Router, private route: ActivatedRoute){  }
  
  @ViewChild('myform') myform!:NgForm ;

  ngOnInit(): void {
    this.customerId=this.route.snapshot.paramMap.get('id');
    this.customer=this.service.getById(this.customerId).subscribe(e=>this.customer=e);
  }

  updateCustomerById(id: number, customer: customer){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
    }
    else{
      this.service.updateById(id,customer).subscribe(()=>this.router.navigate(['customerlist']));
      alert("Employee Updated Successfully!");
    }
  }

  goBack(){
    this.router.navigate(["/customerlist"]);
  }
}


