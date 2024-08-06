package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.sunbeam.entity.BusType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor


public class BusDto{
	
	
	private String busNumber;
	private int busCapacity;
	private BusType busType;
	
	private String source;
	private String destination;
	
	

	private String driverName;
	
	
	private LocalDate journeyDate; 
	
	private LocalTime departureTime; 

	private LocalTime arrivalTime;

	private int availabeSeats;
	
	
	private double fare;
	
	private Long routeId;
	

}
