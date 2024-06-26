import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from '../../Interface/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit{

  bookId:any;
  book!:any;

  constructor(private service:BookService,private router:Router, private route: ActivatedRoute){  }
  
  @ViewChild('myform') myform!:NgForm ;

  ngOnInit(): void {
    this.bookId=this.route.snapshot.paramMap.get('id');
    this.book=this.service.getById(this.bookId).subscribe(e=>this.book=e);
  }

  updateBookById(id: number, book: Book){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
    }
    else{
      this.service.updateById(id,book).subscribe(()=>this.router.navigate(['booklist']));
      alert("Employee Updated Successfully!");
    }
  }

  goBack(){
    this.router.navigate(["/booklist"]);
  }
}

