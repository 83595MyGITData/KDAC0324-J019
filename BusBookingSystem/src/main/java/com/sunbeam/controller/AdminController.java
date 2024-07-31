package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ScheduleDto;
import com.sunbeam.service.ScheduleService;

@RestController
@RequestMapping("/Admin")
public class AdminController {

	public AdminController() {
		System.out.println("Inside" + getClass());

	}

	@Autowired
	private ScheduleService scheduleservice;

	/// Schedule
	@PostMapping("/AddSchedule")
	public ResponseEntity<?> addSchedule(@RequestBody ScheduleDto dto) {
		System.out.println(dto);
		return ResponseEntity.ok(scheduleservice.AddShedule(dto));
	}

	@GetMapping("/GetAllSchedule")
	public ResponseEntity<?> getAllSchedule() {
		return ResponseEntity.ok(scheduleservice.GetAllSchedule());
	}

}
