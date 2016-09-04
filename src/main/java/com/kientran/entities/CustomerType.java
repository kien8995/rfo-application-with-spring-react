package com.kientran.entities;

public class CustomerType {
	private int CustomerTypeId;
	private String CustomerType;

	public CustomerType() {
		super();
	}

	public CustomerType(int customerTypeId, String customerType) {
		super();
		CustomerTypeId = customerTypeId;
		CustomerType = customerType;
	}

	public int getCustomerTypeId() {
		return CustomerTypeId;
	}

	public void setCustomerTypeId(int customerTypeId) {
		CustomerTypeId = customerTypeId;
	}

	public String getCustomerType() {
		return CustomerType;
	}

	public void setCustomerType(String customerType) {
		CustomerType = customerType;
	}

}
