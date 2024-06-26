import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../Interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public add(customer:customer){
    return this.http.post("http://localhost:8080/customer/add",customer);
  }

  public getAll(){
    return this.http.get("http://localhost:8080/customer/viewall");
  }

  public getById(id:number){
    return this.http.get("http://localhost:8080/customer/view/"+id)
  }

  public updateById(id:number,customer:customer){
    return this.http.put("http://localhost:8080/customer/update/"+id,customer)
  }

  public deleteById(id:number){
    return this.http.delete("http://localhost:8080/customer/delete/"+id)
  }

  public checkCustomer(id:number){
    return this.http.get("http://localhost:8080/customer/check/"+id)
  }
}
