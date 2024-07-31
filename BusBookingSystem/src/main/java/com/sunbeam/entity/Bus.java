package com.sunbeam.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name="buses")


public class Bus extends BaseEntity{
	
	@Column(name = "bus_number")
	private String busNumber;
	@Column(name = "bus_capacity")
	private int busCapacity;
	@Column(name = "bus_type")
	private BusType busType;
	@Column(name = "bus_source")
	private String source;
	@Column(name = "bus_destination")
	private String destination;
	
	//private Schedule selectedSchedule;
	
//	@OneToMany
//	
//	private List<Schedule> schedules = new ArrayList<>();
	
//	@ManyToOne
//	@JoinColumn(name="agency_id",nullable = false)
//	private Agency selectedAgency;

}
