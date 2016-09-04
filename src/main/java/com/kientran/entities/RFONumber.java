package com.kientran.entities;

public class RFONumber {
	private int RFONumber;
	private String RFOName;
	private int CustomerTypeId, CompanyId, CreatedBy;
	private String CreatedDate, UpdatedDate;
	private int UpdatedBy;
	private String PostCode, Region;

	public RFONumber() {
		super();
	}

	public RFONumber(int rFONumber, String rFOName, int customerTypeId, int companyId, int createdBy,
			String createdDate, String updatedDate, int updatedBy, String postCode, String region) {
		super();
		RFONumber = rFONumber;
		RFOName = rFOName;
		CustomerTypeId = customerTypeId;
		CompanyId = companyId;
		CreatedBy = createdBy;
		CreatedDate = createdDate;
		UpdatedDate = updatedDate;
		UpdatedBy = updatedBy;
		PostCode = postCode;
		Region = region;
	}

	public int getRFONumber() {
		return RFONumber;
	}

	public void setRFONumber(int rFONumber) {
		RFONumber = rFONumber;
	}

	public String getRFOName() {
		return RFOName;
	}

	public void setRFOName(String rFOName) {
		RFOName = rFOName;
	}

	public int getCustomerTypeId() {
		return CustomerTypeId;
	}

	public void setCustomerTypeId(int customerTypeId) {
		CustomerTypeId = customerTypeId;
	}

	public int getCompanyId() {
		return CompanyId;
	}

	public void setCompanyId(int companyId) {
		CompanyId = companyId;
	}

	public int getCreatedBy() {
		return CreatedBy;
	}

	public void setCreatedBy(int createdBy) {
		CreatedBy = createdBy;
	}

	public String getCreatedDate() {
		return CreatedDate;
	}

	public void setCreatedDate(String createdDate) {
		CreatedDate = createdDate;
	}

	public String getUpdatedDate() {
		return UpdatedDate;
	}

	public void setUpdatedDate(String updatedDate) {
		UpdatedDate = updatedDate;
	}

	public int getUpdatedBy() {
		return UpdatedBy;
	}

	public void setUpdatedBy(int updatedBy) {
		UpdatedBy = updatedBy;
	}

	public String getPostCode() {
		return PostCode;
	}

	public void setPostCode(String postCode) {
		PostCode = postCode;
	}

	public String getRegion() {
		return Region;
	}

	public void setRegion(String region) {
		Region = region;
	}

}
