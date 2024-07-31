package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.ReservationDto;
import com.sunbeam.service.CustomerService;
import com.sunbeam.service.ReservationService;


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
		System.out.println(dto);
		return ResponseEntity.ok(customerservice.registerCustomer(dto));
	}
	
	@PostMapping("/seatReservation")
	public ResponseEntity<?> doReservation(@RequestBody ReservationDto dto)
	{
		return ResponseEntity.ok(reservationservice.addReservation(dto));
	}
	


}
