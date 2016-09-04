package com.kientran.entities;

public class Company {
	private int CompanyId;
	private String Name, Type, Status, Sector, Phonenumber, Faxnumber;
	private String Emailaddress, CreateDate, CreateBy, AMISCode, BusinessArea, RFONumber;

	public Company() {
		super();
	}

	public Company(int companyId, String name, String type, String status, String sector, String phonenumber,
			String faxnumber, String emailaddress, String createDate, String createBy, String aMISCode,
			String businessArea, String rFONumber) {
		super();
		CompanyId = companyId;
		Name = name;
		Type = type;
		Status = status;
		Sector = sector;
		Phonenumber = phonenumber;
		Faxnumber = faxnumber;
		Emailaddress = emailaddress;
		CreateDate = createDate;
		CreateBy = createBy;
		AMISCode = aMISCode;
		BusinessArea = businessArea;
		RFONumber = rFONumber;
	}

	public int getCompanyId() {
		return CompanyId;
	}

	public void setCompanyId(int companyId) {
		CompanyId = companyId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getSector() {
		return Sector;
	}

	public void setSector(String sector) {
		Sector = sector;
	}

	public String getPhonenumber() {
		return Phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		Phonenumber = phonenumber;
	}

	public String getFaxnumber() {
		return Faxnumber;
	}

	public void setFaxnumber(String faxnumber) {
		Faxnumber = faxnumber;
	}

	public String getEmailaddress() {
		return Emailaddress;
	}

	public void setEmailaddress(String emailaddress) {
		Emailaddress = emailaddress;
	}

	public String getCreateDate() {
		return CreateDate;
	}

	public void setCreateDate(String createDate) {
		CreateDate = createDate;
	}

	public String getCreateBy() {
		return CreateBy;
	}

	public void setCreateBy(String createBy) {
		CreateBy = createBy;
	}

	public String getAMISCode() {
		return AMISCode;
	}

	public void setAMISCode(String aMISCode) {
		AMISCode = aMISCode;
	}

	public String getBusinessArea() {
		return BusinessArea;
	}

	public void setBusinessArea(String businessArea) {
		BusinessArea = businessArea;
	}

	public String getRFONumber() {
		return RFONumber;
	}

	public void setRFONumber(String rFONumber) {
		RFONumber = rFONumber;
	}

}
