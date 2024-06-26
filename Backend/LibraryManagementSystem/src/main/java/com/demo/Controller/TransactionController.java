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

import com.demo.DTO.TransactionDTO;
import com.demo.Entity.CustomerEntity;
import com.demo.Entity.Transaction;
import com.demo.Service.TransactionService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/transaction")
public class TransactionController {
	
	@Autowired
	private TransactionService service;
	
	@PostMapping("/add")
	public Transaction addTransaction(@RequestBody TransactionDTO transaction) {
		return service.addTransaction(transaction);
	}
	
	@GetMapping("/viewall")
	public List<TransactionDTO> getAllTransactions() {
		return service.getAllTransactions();
	}
	
	@GetMapping("/view/{id}")
	public TransactionDTO getTransactionById(@PathVariable long id) throws Exception{
		return service.convertToDTO(service.getTransactionById(id));
	}
	
	@PutMapping("/update/{transactionid}")
	public TransactionDTO updateTransactionById(@PathVariable long transactionid,@RequestBody TransactionDTO transaction) throws Exception {
		return service.convertToDTO(service.updateTransactionById(transactionid, transaction));
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteTransactionById(@PathVariable long id) throws Exception{
		service.deleteTransactionById(id);
	}
	
	@GetMapping("/check/{id}")
	public boolean checkTransaction(@PathVariable long id) {
		return service.checkTransaction(id);
	}

}
