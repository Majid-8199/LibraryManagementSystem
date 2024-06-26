import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Router } from '@angular/router';
import { Book } from '../../Interface/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{
 

    @ViewChild('myform') myform!:NgForm ;
  
    constructor(private service:BookService,private router:Router){
    }
  
    ngOnInit(): void {
    }
  
    addBook(book:Book){
      if (this.myform.invalid) {
        alert('Please fill out all required fields.');
      }
      else{
        this.service.add(book).subscribe();
        this.router.navigate(['booklist']);
        alert("Book Added Successfully!");
      }
    }
  } 
   