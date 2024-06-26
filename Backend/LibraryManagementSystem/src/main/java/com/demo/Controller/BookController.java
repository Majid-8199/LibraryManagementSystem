package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entity.Book;
import com.demo.Service.BookService;

@RestController
@RequestMapping("/book")
@CrossOrigin("http://localhost:4200")
public class BookController {

	@Autowired
	private BookService service;
	
	@PostMapping("/add")
	public void addBook(@RequestBody Book book) {
		service.addBook(book);
	}
	
	@GetMapping("/viewall")
	public List<Book> getAllBooks() {
		return service.getAllBooks();
	}
	
	@GetMapping("/viewbyId/{id}")
	public Book getBookById(@PathVariable long id) throws Exception{
		return service.getBookById(id);
	}
	
	@GetMapping("/viewbyName/{book}")
	public Book getBookByName(@PathVariable String book) throws Exception{
		return service.getBookByName(book);
	}
	
	@PutMapping("/update/{id}")
	public void updateBookById(@PathVariable long id,@RequestBody Book book) throws Exception {
		service.updateBookById(id, book);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteBookById(@PathVariable long id) throws Exception{
		service.deleteBookById(id);
	}
	
	@GetMapping("/check/{book}")
	public boolean checkBook(@PathVariable String book) {
		return service.checkBook(book);
	}
	
	@GetMapping("/checkbyid/{id}")
	public boolean checkBook(@PathVariable long id) {
		return service.checkBookById(id);
	}
	
}
