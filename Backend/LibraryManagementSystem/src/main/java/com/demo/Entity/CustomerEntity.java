package com.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class CustomerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long customerID;
	
	@Column(nullable = false)
	String firstname;
	
	@Column(nullable = false)
	String lastname;
	
	@Column(nullable = false)
	String email;
	
	@Column(nullable = false)
	long ph;
	
	public CustomerEntity() {
	
	}

	public CustomerEntity(long customerid, String firstname, String lastname, String email, long ph) {
		super();
		this.customerID = customerid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.ph = ph;
	}

	public long getCustomerid() {
		return customerID;
	}

	public void setCustomerid(long customerid) {
		this.customerID = customerid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPh() {
		return ph;
	}

	public void setPh(long ph) {
		this.ph = ph;
	}	
}
