package com.sunbeam.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.validator.internal.IgnoreForbiddenApisErrors;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	
	
	@Column(name = "driver_name")
	private String driverName;
	
	@Column(name="journey_date")
	private LocalDate journeyDate;
	
	@Column(name="departure_time")
	private LocalDateTime departureTime; 
	@Column(name="arrival_time")
	private LocalDateTime arrivalTime;
	@Column(name="availabe_seats")
	private int availabeSeats;
	
	@Column(name = "fare")
	private double fare;
	
	
	@OneToMany	
	@JsonIgnore
	private List<Reservation> reservations = new ArrayList<>();
	
	@ManyToOne
	//@JsonIgnore
	 @JsonManagedReference
	@JoinColumn(name="route_id",nullable = false)
	//@OneToMany(mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private Route selectedRoute;
	

}
