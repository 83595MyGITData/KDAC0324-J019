package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.ReservationDto;
import com.sunbeam.exceptions.ResourceNotFoundException;
import com.sunbeam.service.CustomerService;
import com.sunbeam.service.ReservationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customers")
public class CustomerController {
	@Autowired	
	private CustomerService customerservice;
	
	@Autowired
	private ReservationService reservationservice;
	
	
	@PostMapping("/register")
	public ResponseEntity<?> registerCustomer(@RequestBody CustomerDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(customerservice.registerCustomer(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
		
	}
	
	@PostMapping("/seatReservation")
	public ResponseEntity<?> doReservation(@RequestBody ReservationDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(reservationservice.addReservation(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(customerservice.login(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
	}


}
