import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit{
  check:any;
  BookName!:String;
  BookList:any;
  constructor(private service:BookService, private router:Router){}

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>this.BookList=data);
  }

  deleteBookById(id:number){
    this.service.deleteById(id).subscribe();
    window.location.reload();
  }

  updateBookById(id: number) {
    this.router.navigate(['/updatebook', id]);
  }

  addBook(){
    this.router.navigate(['/addbook']);
  }

  searchBook(BookName: String) {
    this.service.checkBook(BookName).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/searchbook', BookName]);
        } else {
          alert("Book not found!");
        }
      }
    );
  }
}

