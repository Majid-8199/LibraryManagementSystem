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

import com.demo.Entity.CustomerEntity;
import com.demo.Service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin("http://localhost:4200")
public class CustomerController {
	@Autowired
	private CustomerService service;
	
	@PostMapping("/add")
	public void addCustomer(@RequestBody CustomerEntity customer) {
		service.addCustomer(customer);
	}
	
	@GetMapping("/viewall")
	public List<CustomerEntity> getAllCustomers() {
		return service.getAllCustomers();
	}
	
	@GetMapping("/view/{id}")
	public CustomerEntity getCustomerById(@PathVariable long id) throws Exception{
		return service.getCustomerById(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateCustomerById(@PathVariable long id,@RequestBody CustomerEntity customer) throws Exception {
		service.updateCustomerById(id, customer);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCustomerById(@PathVariable long id) throws Exception{
		service.deleteCustomerById(id);
	}
	
	@GetMapping("/check/{id}")
	public boolean checkEmployee(@PathVariable long id) {
		return service.checkCustomer(id);
	}
}
