package com.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.Entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
	public Optional<Book> findByBook(String book);
}
