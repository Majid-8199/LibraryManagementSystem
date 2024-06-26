import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.css'
})
export class SearchBookComponent implements OnInit{

  BookName!:any;
  book:any;
  constructor(private service:BookService,private router:Router,private route:ActivatedRoute){ }
  ngOnInit(): void {
    this.BookName=this.route.snapshot.paramMap.get('BookName');
    this.service.getByName(this.BookName).subscribe(e=>this.book=e);
  }

  searchBook(name: string) {
    this.service.checkBook(name).subscribe(
      (result) => {
        if (result) {
          this.service.getByName(name).subscribe(e=>this.book=e);
        } else {
          alert("Employee not found!");
        }
      }
    );
  }

  deleteBook(id:number){
    this.service.deleteById(id).subscribe(()=>this.router.navigate(['/booklist']));
  }
  
  updateBook(id:number){
    this.router.navigate(['/updatebook',id]).then(()=>window.location.reload())
  }

}
