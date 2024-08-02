package com.sunbeam.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.sunbeam.dao.ReservationDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ReservationDto;

public interface ReservationService {
	
	public ApiResponse addReservation(ReservationDto dto);

}
