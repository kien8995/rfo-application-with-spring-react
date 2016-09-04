package com.kientran.entities;

public class AgreementStatus {
	private int StatusId;
	private String Status;

	public AgreementStatus() {
		super();
	}

	public AgreementStatus(int statusId, String status) {
		super();
		StatusId = statusId;
		Status = status;
	}

	public int getStatusId() {
		return StatusId;
	}

	public void setStatusId(int statusId) {
		StatusId = statusId;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

}
