package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor



public class ReservationDto {
	
	private int seatNumber;
	private boolean reservationStatus;
	private LocalDate reservationDate;
	
	private Long schdeuleId;
	
	private Long customerId;


}
