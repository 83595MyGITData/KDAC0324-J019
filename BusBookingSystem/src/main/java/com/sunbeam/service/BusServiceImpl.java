package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Customer;

@Service
@Transactional
public class BusServiceImpl implements BusService {
	@Autowired
	private BusDao busdao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addBus(BusDto dto) {
		// TODO Auto-generated method stub
		Bus bus=mapper.map(dto, Bus.class);	
		busdao.save(bus);
		return "Bus Added Successfully";
	}

	@Override
	public List<Bus> getAllBuses() {
		
		return busdao.findAll();
	}
	
		
}
