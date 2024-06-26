import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transaction } from '../Interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {}

  public add(transaction:transaction){
    return this.http.post("http://localhost:8080/transaction/add",transaction);
  }

  public getAll(){
    return this.http.get("http://localhost:8080/transaction/viewall");
  }

  public getById(id:number){
    return this.http.get("http://localhost:8080/transaction/view/"+id)
  }

  public updateById(id:number, transaction:transaction,){
    return this.http.put("http://localhost:8080/transaction/update/"+id,transaction)
  }

  public deleteById(id:number){
    return this.http.delete("http://localhost:8080/transaction/delete/"+id)
  }

  public checkTransaction(id:number){
    return this.http.get("http://localhost:8080/transaction/check/"+id)
  }
}
