package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
	
	//Customer registerCustomer();

}
