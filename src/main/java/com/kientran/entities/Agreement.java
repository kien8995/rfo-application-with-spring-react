package com.kientran.entities;

public class Agreement {
	private int AgreementNumber, VariantNumber;
	private String Name, Description, StartDate, EndDate;
	private int StatusId;
	private String LastStatusUpdatedDate;
	private int AuthorisedBy;
	private String AuthorsiedDate, CreatedDate;
	private int CreatedBy;
	private String LastUpdateDate;
	private int LastUpdateBt;
	private String PaymentTo;
	private String AMISAccountCode, HandingChange;
	private int FundingMethodId, CreaditNoteId;
	private String SignRequired, SignReceived, SignReceivedDate, DealerVisibility, Combinability;
	private int NumberOfRegistrations, VolumeId;
	private String DiscountUnit;

	public Agreement() {
		super();
	}

	public Agreement(int agreementNumber, int variantNumber, String name, String description, String startDate,
			String endDate, int statusId, String lastStatusUpdatedDate, int authorisedBy, String authorsiedDate,
			String createdDate, int createdBy, String lastUpdateDate, int lastUpdateBt, String paymentTo,
			String aMISAccountCode, String handingChange, int fundingMethodId, int creaditNoteId, String signRequired,
			String signReceived, String signReceivedDate, String dealerVisibility, String combinability,
			int numberOfRegistrations, int volumeId, String discountUnit) {
		super();
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		Name = name;
		Description = description;
		StartDate = startDate;
		EndDate = endDate;
		StatusId = statusId;
		LastStatusUpdatedDate = lastStatusUpdatedDate;
		AuthorisedBy = authorisedBy;
		AuthorsiedDate = authorsiedDate;
		CreatedDate = createdDate;
		CreatedBy = createdBy;
		LastUpdateDate = lastUpdateDate;
		LastUpdateBt = lastUpdateBt;
		PaymentTo = paymentTo;
		AMISAccountCode = aMISAccountCode;
		HandingChange = handingChange;
		FundingMethodId = fundingMethodId;
		CreaditNoteId = creaditNoteId;
		SignRequired = signRequired;
		SignReceived = signReceived;
		SignReceivedDate = signReceivedDate;
		DealerVisibility = dealerVisibility;
		Combinability = combinability;
		NumberOfRegistrations = numberOfRegistrations;
		VolumeId = volumeId;
		DiscountUnit = discountUnit;
	}

	public int getAgreementNumber() {
		return AgreementNumber;
	}

	public void setAgreementNumber(int agreementNumber) {
		AgreementNumber = agreementNumber;
	}

	public int getVariantNumber() {
		return VariantNumber;
	}

	public void setVariantNumber(int variantNumber) {
		VariantNumber = variantNumber;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getStartDate() {
		return StartDate;
	}

	public void setStartDate(String startDate) {
		StartDate = startDate;
	}

	public String getEndDate() {
		return EndDate;
	}

	public void setEndDate(String endDate) {
		EndDate = endDate;
	}

	public int getStatusId() {
		return StatusId;
	}

	public void setStatusId(int statusId) {
		StatusId = statusId;
	}

	public String getLastStatusUpdatedDate() {
		return LastStatusUpdatedDate;
	}

	public void setLastStatusUpdatedDate(String lastStatusUpdatedDate) {
		LastStatusUpdatedDate = lastStatusUpdatedDate;
	}

	public int getAuthorisedBy() {
		return AuthorisedBy;
	}

	public void setAuthorisedBy(int authorisedBy) {
		AuthorisedBy = authorisedBy;
	}

	public String getAuthorsiedDate() {
		return AuthorsiedDate;
	}

	public void setAuthorsiedDate(String authorsiedDate) {
		AuthorsiedDate = authorsiedDate;
	}

	public String getCreatedDate() {
		return CreatedDate;
	}

	public void setCreatedDate(String createdDate) {
		CreatedDate = createdDate;
	}

	public int getCreatedBy() {
		return CreatedBy;
	}

	public void setCreatedBy(int createdBy) {
		CreatedBy = createdBy;
	}

	public String getLastUpdateDate() {
		return LastUpdateDate;
	}

	public void setLastUpdateDate(String lastUpdateDate) {
		LastUpdateDate = lastUpdateDate;
	}

	public int getLastUpdateBt() {
		return LastUpdateBt;
	}

	public void setLastUpdateBt(int lastUpdateBt) {
		LastUpdateBt = lastUpdateBt;
	}

	public String getPaymentTo() {
		return PaymentTo;
	}

	public void setPaymentTo(String paymentTo) {
		PaymentTo = paymentTo;
	}

	public String getAMISAccountCode() {
		return AMISAccountCode;
	}

	public void setAMISAccountCode(String aMISAccountCode) {
		AMISAccountCode = aMISAccountCode;
	}

	public String getHandingChange() {
		return HandingChange;
	}

	public void setHandingChange(String handingChange) {
		HandingChange = handingChange;
	}

	public int getFundingMethodId() {
		return FundingMethodId;
	}

	public void setFundingMethodId(int fundingMethodId) {
		FundingMethodId = fundingMethodId;
	}

	public int getCreaditNoteId() {
		return CreaditNoteId;
	}

	public void setCreaditNoteId(int creaditNoteId) {
		CreaditNoteId = creaditNoteId;
	}

	public String getSignRequired() {
		return SignRequired;
	}

	public void setSignRequired(String signRequired) {
		SignRequired = signRequired;
	}

	public String getSignReceived() {
		return SignReceived;
	}

	public void setSignReceived(String signReceived) {
		SignReceived = signReceived;
	}

	public String getSignReceivedDate() {
		return SignReceivedDate;
	}

	public void setSignReceivedDate(String signReceivedDate) {
		SignReceivedDate = signReceivedDate;
	}

	public String getDealerVisibility() {
		return DealerVisibility;
	}

	public void setDealerVisibility(String dealerVisibility) {
		DealerVisibility = dealerVisibility;
	}

	public String getCombinability() {
		return Combinability;
	}

	public void setCombinability(String combinability) {
		Combinability = combinability;
	}

	public int getNumberOfRegistrations() {
		return NumberOfRegistrations;
	}

	public void setNumberOfRegistrations(int numberOfRegistrations) {
		NumberOfRegistrations = numberOfRegistrations;
	}

	public int getVolumeId() {
		return VolumeId;
	}

	public void setVolumeId(int volumeId) {
		VolumeId = volumeId;
	}

	public String getDiscountUnit() {
		return DiscountUnit;
	}

	public void setDiscountUnit(String discountUnit) {
		DiscountUnit = discountUnit;
	}

}
