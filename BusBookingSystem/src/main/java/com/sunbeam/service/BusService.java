package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.BusDto;
import com.sunbeam.entity.Bus;

public interface BusService {
	
	public String addBus(BusDto dto) ;
	
	public List<Bus> getAllBuses();
	

}
