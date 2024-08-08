package com.sunbeam.dto;

import com.sunbeam.entity.Bus;

public class FeedbackDto {

	private int serviceRating;
	private int driverRating ;
	private Long busId;
	private Long customerId;
	private String comments;
	
	
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public int getServiceRating() {
		return serviceRating;
	}
	public void setServiceRating(int serviceRating) {
		this.serviceRating = serviceRating;
	}
	public int getDriverRating() {
		return driverRating;
	}
	public void setDriverRating(int driverRating) {
		this.driverRating = driverRating;
	}
	public Long getBusId() {
		return busId;
	}
	public void setBusId(Long busId) {
		this.busId = busId;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	
	public FeedbackDto(int serviceRating, int driverRating, Long busId, Long customerId,String cmt) {
		
		this.serviceRating = serviceRating;
		this.driverRating = driverRating;
		this.busId = busId;
		this.customerId = customerId;
		this.comments=cmt;
	}
	
	
	
	
	
}
