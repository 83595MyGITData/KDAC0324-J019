package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.SearchDto;
import com.sunbeam.entity.Bus;

public interface BusService {
	
	public String addBus(BusDto dto) ;
	
	public List<Bus> getAllBuses();
	
	public List<Bus> getAllBusesBySourceAndDest(String source, String dest,String date);
	 public String  deleteBus(Long id);

}
