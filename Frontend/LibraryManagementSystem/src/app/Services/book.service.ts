import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public add(book:Book){
    return this.http.post("http://localhost:8080/book/add",book);
  }

  public getAll(){
    return this.http.get("http://localhost:8080/book/viewall");
  }

  public getById(id:number){
    return this.http.get("http://localhost:8080/book/viewbyId/"+id)
  }

  public getByName(book:String){
    return this.http.get("http://localhost:8080/book/viewbyName/"+book)
  }

  public updateById(id:number,book:Book){
    return this.http.put("http://localhost:8080/book/update/"+id,book)
  }

  public deleteById(id:number){
    return this.http.delete("http://localhost:8080/book/delete/"+id)
  }

  public checkBook(book:String){
    return this.http.get("http://localhost:8080/book/check/"+book)
  }

  public checkBookById(id:number){
    return this.http.get("http://localhost:8080/book/checkbyid/"+id)
  }

}
