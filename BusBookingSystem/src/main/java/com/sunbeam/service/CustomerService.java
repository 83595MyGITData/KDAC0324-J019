package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.entity.Customer;

public interface CustomerService {
	public String registerCustomer(CustomerDto dto);
	
	public List<Customer> getAllCustomers();

}
