package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.entity.Customer;

import main.java.com.sunbeam.dto.LoginDto;

public interface CustomerService {
	public String registerCustomer(CustomerDto dto);
	public List<Customer> getAllCustomers();
   public ApiResponse login(LoginDto dto);
}
