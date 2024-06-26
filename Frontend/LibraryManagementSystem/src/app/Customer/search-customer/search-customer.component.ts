import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css'
})
export class SearchCustomerComponent implements OnInit{

  CustomerId!:number;
  customerID:any;
  customer:any;
  constructor(private service:CustomerService,private router:Router,private route:ActivatedRoute){ }
  ngOnInit(): void {
    this.customerID=this.route.snapshot.paramMap.get('id');
    this.service.getById(this.customerID).subscribe(e=>this.customer=e);
  }

  searchCustomer(id: number) {
    this.service.checkCustomer(id).subscribe(
      (result) => {
        if (result) {
          this.service.getById(id).subscribe(e=>this.customer=e);
        } else {
          alert("Employee not found!");
        }
      }
    );
  }

  deleteCustomer(id:number){
    this.service.deleteById(id).subscribe(()=>this.router.navigate(['/customerlist']));
  }
  
  updateCustomer(id:number){
    this.router.navigate(['/updatecustomer',id]).then(()=>window.location.reload())
  }

}
