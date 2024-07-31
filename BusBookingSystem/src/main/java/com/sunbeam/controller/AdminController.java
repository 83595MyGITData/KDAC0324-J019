package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.ScheduleDto;
import com.sunbeam.service.BusService;
import com.sunbeam.service.CustomerService;
import com.sunbeam.service.ScheduleService;

@RestController
@RequestMapping("/Admin")
public class AdminController {
	
	public AdminController() {
		System.out.println("Inside"+getClass());
				
	}
	
	@Autowired	
	private BusService busservice;
	
	@Autowired
	private CustomerService customerservice;
	
	@Autowired
	private ScheduleService scheduleservice;
	
	///Buses
	@PostMapping("/AddBus")
	public ResponseEntity<?> registerBus(@RequestBody BusDto dto)
	{
		//System.out.println(dto);
		return ResponseEntity.ok(busservice.addBus(dto));
	}
	
	@GetMapping("/GetAllBuses")
	public ResponseEntity<?> getAllBuses()
	{
		return ResponseEntity.ok(busservice.getAllBuses());
	}
	
	///Customers
	@PostMapping("/AddCustomer")
	public ResponseEntity<?> RegisterCustomer(@RequestBody CustomerDto dto)
	{
		System.out.println(dto);
		return ResponseEntity.ok(customerservice.registerCustomer(dto));
	}
	
	@GetMapping("/GetAllCustomers")
	public ResponseEntity<?> getAllCustomers()
	{
		return ResponseEntity.ok(customerservice.getAllCustomers());
	}
	
	///Schedule
		@PostMapping("/AddSchedule")
		public ResponseEntity<?> addSchedule(@RequestBody ScheduleDto dto)
		{
			System.out.println(dto);
			return ResponseEntity.ok(scheduleservice.AddShedule(dto));
		}
		
		@GetMapping("/GetAllSchedule")
		public ResponseEntity<?> getAllSchedule()
		{
			return ResponseEntity.ok(scheduleservice.GetAllSchedule());
		}
	
	
	

}
