package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Bus;

public interface BusDao extends JpaRepository<Bus, Long> {

}

