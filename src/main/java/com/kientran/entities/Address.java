package com.kientran.entities;

public class Address {
	// Constants
	public static final String ADDRESS = "NO ADDRESS";
	public static final String CITY = "NO CITY";
	public static final String STATE = "NO STATE";
	public static final String COUNTRY = "NO COUNTRY";
	public static final String POSTCODE = "NO POSTCODE";
	public static final int COMPANYID = 0;

	// properties
	private String Address1, Address2, Address3, Address4, Address5, City, State, Country, Postcode;
	private int CompanyId;

	// constructor
	public Address() {
		Address1 = Address.ADDRESS;
		Address2 = Address.ADDRESS;
		Address3 = Address.ADDRESS;
		Address4 = Address.ADDRESS;
		Address5 = Address.ADDRESS;
		City = Address.CITY;
		State = Address.STATE;
		Country = Address.COUNTRY;
		Postcode = Address.POSTCODE;
		CompanyId = Address.COMPANYID;

	}

	public Address(String address1, String address2, String address3, String address4, String address5, String city,
			String state, String country, String postcode, int companyId) {
		super();
		Address1 = address1;
		Address2 = address2;
		Address3 = address3;
		Address4 = address4;
		Address5 = address5;
		City = city;
		State = state;
		Country = country;
		Postcode = postcode;
		CompanyId = companyId;
	}
	// getter setter

	public String getAddress1() {
		return Address1;
	}

	public void setAddress1(String address1) {
		Address1 = address1;
	}

	public String getAddress2() {
		return Address2;
	}

	public void setAddress2(String address2) {
		Address2 = address2;
	}

	public String getAddress3() {
		return Address3;
	}

	public void setAddress3(String address3) {
		Address3 = address3;
	}

	public String getAddress4() {
		return Address4;
	}

	public void setAddress4(String address4) {
		Address4 = address4;
	}

	public String getAddress5() {
		return Address5;
	}

	public void setAddress5(String address5) {
		Address5 = address5;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public String getPostcode() {
		return Postcode;
	}

	public void setPostcode(String postcode) {
		Postcode = postcode;
	}

	public int getCompanyId() {
		return CompanyId;
	}

	public void setCompanyId(int companyId) {
		CompanyId = companyId;
	}

}
