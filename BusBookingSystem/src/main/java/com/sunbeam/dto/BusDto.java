package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;

import com.sunbeam.entity.BusType;
import com.sunbeam.entity.Route;

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
	
	private LocalDateTime departureTime; 

	private LocalDateTime arrivalTime;

	private int availabeSeats;
	
	
	private double fare;
	
	private Long routeId;
	

}
