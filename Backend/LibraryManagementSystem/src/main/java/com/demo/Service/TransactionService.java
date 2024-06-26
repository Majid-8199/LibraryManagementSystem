package com.demo.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.DTO.TransactionDTO;
import com.demo.Entity.Book;
import com.demo.Entity.CustomerEntity;
import com.demo.Entity.Transaction;
import com.demo.Repository.BookRepository;
import com.demo.Repository.CustomerRepository;
import com.demo.Repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	public Transaction addTransaction(TransactionDTO dto) {
		Optional<Book> book=bookRepository.findById(dto.getBookID());
		Optional<CustomerEntity> customer=customerRepository.findById(dto.getCustomerID());
		Transaction transaction=new Transaction();
		dto.setTransactionDate(LocalDate.now());
		if(book.isPresent() && customer.isPresent()) {
			transaction.setTransactionID(dto.getTransactionID());
			transaction.setBook(book.get());
			transaction.setCustomer(customer.get());
			transaction.setTransactionDate(dto.getTransactionDate());
			transaction.setDueDate(dto.getDueDate());
			transaction.setReturnDate(dto.getReturnDate());
			transactionRepository.save(transaction);
		}
		return transaction;
	}
	
	public TransactionDTO convertToDTO(Transaction transaction) {
		TransactionDTO dto=new TransactionDTO();
		dto.setTransactionID(transaction.getTransactionID());
		dto.setBookID(transaction.getBook().getBookID());
		dto.setCustomerID(transaction.getCustomer().getCustomerid());
		dto.setTransactionDate(transaction.getTransactionDate());
		dto.setDueDate(transaction.getDueDate());
		dto.setReturnDate(transaction.getReturnDate());
		return dto;
	}
	
	public List<TransactionDTO> convertToDTOList(List<Transaction> transactions) {
        return transactions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
	
	public List<TransactionDTO> getAllTransactions() {
		List<Transaction> transaction=transactionRepository.findAll();
		return convertToDTOList(transaction);
		 
	}
	
	public Transaction getTransactionById(long id) throws Exception{
		Optional<Transaction> b=transactionRepository.findById(id);
		if(b.isPresent()) {
			return b.get();
		}
		else {
			throw new Exception();
		}
	}
	
	public Transaction updateTransactionById(long id, TransactionDTO dto) throws Exception {
		Optional<Transaction> t=transactionRepository.findById(id);
		Optional<Book> book=bookRepository.findById(dto.getBookID());
		Optional<CustomerEntity> customer=customerRepository.findById(dto.getCustomerID());
		Transaction transaction=t.get();
		if(t.isPresent() && book.isPresent() && customer.isPresent()) {
			transaction.setBook(book.get());
			transaction.setCustomer(customer.get());
			transaction.setTransactionDate(dto.getTransactionDate());
			transaction.setDueDate(dto.getDueDate());
			transaction.setReturnDate(dto.getReturnDate());
			transactionRepository.save(transaction);
			return transaction;
		}
		else {
			throw new Exception("TransactionID, BookID or CustomerID");
		}
		
	}
	
	public void deleteTransactionById(long id) throws Exception {
		Optional<Transaction> b=transactionRepository.findById(id);
		if(b.isPresent()) {
			transactionRepository.deleteById(id);
		}
		else {
			throw new Exception();
		}
	}
	
	public boolean checkTransaction(long id) {
		Optional<Transaction> b=transactionRepository.findById(id);
		return (b.isPresent())?true:false;
	}
	

}
