package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

}
