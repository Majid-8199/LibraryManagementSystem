package com.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entity.CustomerEntity;
import com.demo.Repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository repository;
	
	public void addCustomer(CustomerEntity customer) {
		repository.save(customer); 
	}
	
	public List<CustomerEntity> getAllCustomers() {
		return repository.findAll();
	}
	
	public CustomerEntity getCustomerById(long id) throws Exception {	
		Optional<CustomerEntity> c=repository.findById(id);
		if(c.isPresent()) {
			return c.get();
		}
		else {
			throw new Exception();
		}
	}
	
	public void updateCustomerById(long id, CustomerEntity customer) throws Exception {
		Optional<CustomerEntity> c=repository.findById(id);
		if(c.isPresent()) {
			CustomerEntity c1=c.get();
			c1.setFirstname(customer.getFirstname());
			c1.setLastname(customer.getLastname());
			c1.setEmail(customer.getEmail());
			c1.setPh(customer.getPh());
			repository.save(c1);
		}
		else {
			throw new Exception();
		}
	}
	
	public void deleteCustomerById(long id) throws Exception {
		Optional<CustomerEntity> c=repository.findById(id);
		if(c.isPresent()) {
			repository.deleteById(id);
		}
		else {
			throw new Exception();
		}
	}
	
	public boolean checkCustomer(long id) {
		Optional<CustomerEntity> c=repository.findById(id);
		return (c.isPresent())?true:false;
	}
}
