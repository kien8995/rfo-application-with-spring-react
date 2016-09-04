package com.kientran.entities;

public class FundingMethod {
	private int FudingMethodId;
	private String FundingMethodName, FundingType, CostCentre, BudgetCode, ContractTemplateLocation;
	private String SignedContractDefault, Status, AMISDeptCode, AMISReasonCode;

	public FundingMethod() {
		super();
	}

	public FundingMethod(int fudingMethodId, String fundingMethodName, String fundingType, String costCentre,
			String budgetCode, String contractTemplateLocation, String signedContractDefault, String status,
			String aMISDeptCode, String aMISReasonCode) {
		super();
		FudingMethodId = fudingMethodId;
		FundingMethodName = fundingMethodName;
		FundingType = fundingType;
		CostCentre = costCentre;
		BudgetCode = budgetCode;
		ContractTemplateLocation = contractTemplateLocation;
		SignedContractDefault = signedContractDefault;
		Status = status;
		AMISDeptCode = aMISDeptCode;
		AMISReasonCode = aMISReasonCode;
	}

	public int getFudingMethodId() {
		return FudingMethodId;
	}

	public void setFudingMethodId(int fudingMethodId) {
		FudingMethodId = fudingMethodId;
	}

	public String getFundingMethodName() {
		return FundingMethodName;
	}

	public void setFundingMethodName(String fundingMethodName) {
		FundingMethodName = fundingMethodName;
	}

	public String getFundingType() {
		return FundingType;
	}

	public void setFundingType(String fundingType) {
		FundingType = fundingType;
	}

	public String getCostCentre() {
		return CostCentre;
	}

	public void setCostCentre(String costCentre) {
		CostCentre = costCentre;
	}

	public String getBudgetCode() {
		return BudgetCode;
	}

	public void setBudgetCode(String budgetCode) {
		BudgetCode = budgetCode;
	}

	public String getContractTemplateLocation() {
		return ContractTemplateLocation;
	}

	public void setContractTemplateLocation(String contractTemplateLocation) {
		ContractTemplateLocation = contractTemplateLocation;
	}

	public String getSignedContractDefault() {
		return SignedContractDefault;
	}

	public void setSignedContractDefault(String signedContractDefault) {
		SignedContractDefault = signedContractDefault;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getAMISDeptCode() {
		return AMISDeptCode;
	}

	public void setAMISDeptCode(String aMISDeptCode) {
		AMISDeptCode = aMISDeptCode;
	}

	public String getAMISReasonCode() {
		return AMISReasonCode;
	}

	public void setAMISReasonCode(String aMISReasonCode) {
		AMISReasonCode = aMISReasonCode;
	}

}
