package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entity.Book;
import com.demo.Repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository repository;
	
	public void addBook(Book book) {
		repository.save(book); 
	}
	
	public List<Book> getAllBooks() {
		return repository.findAll();
	}
	
	public Book getBookById(long id) throws Exception{
		Optional<Book> b=repository.findById(id);
		if(b.isPresent()) {
			return b.get();
		}
		else {
			throw new Exception();
		}
	}
	
	public Book getBookByName(String book) throws Exception {	
		Optional<Book> b=repository.findByBook(book);
		if(b.isPresent()) {
			return b.get();
		}
		else {
			throw new Exception();
		}
	}
	
	public void updateBookById(long id, Book book) throws Exception {
		Optional<Book> b=repository.findById(id);
		if(b.isPresent()) {
			Book b1=b.get();
			b1.setBook(book.getBook());
			b1.setAuthor(book.getAuthor());
			repository.save(b1);
		}
		else {
			throw new Exception();
		}
	}
	
	public void deleteBookById(long id) throws Exception {
		Optional<Book> b=repository.findById(id);
		if(b.isPresent()) {
			repository.deleteById(id);
		}
		else {
			throw new Exception();
		}
	}
	
	public boolean checkBook(String book) {
		Optional<Book> b=repository.findByBook(book);
		return (b.isPresent())?true:false;
	}
	
	public boolean checkBookById(long id) {
		Optional<Book> b=repository.findById(id);
		return (b.isPresent())?true:false;
	}
	
}
