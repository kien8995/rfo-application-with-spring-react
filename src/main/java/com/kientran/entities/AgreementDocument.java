package com.kientran.entities;

public class AgreementDocument {
	private int DocumentId, AgreementNumber, VariantNumber, FundingMethodId, RFONumber;
	private String FileLocation, FileName, Size, FileType, Status, CreatedDateTime;

	public AgreementDocument(int documentId, int agreementNumber, int variantNumber, int fundingMethodId, int rFONumber,
			String fileLocation, String fileName, String size, String fileType, String status, String createdDateTime) {
		super();
		DocumentId = documentId;
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		FundingMethodId = fundingMethodId;
		RFONumber = rFONumber;
		FileLocation = fileLocation;
		FileName = fileName;
		Size = size;
		FileType = fileType;
		Status = status;
		CreatedDateTime = createdDateTime;
	}

	public AgreementDocument() {
		super();
	}

	public int getDocumentId() {
		return DocumentId;
	}

	public void setDocumentId(int documentId) {
		DocumentId = documentId;
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

	public int getFundingMethodId() {
		return FundingMethodId;
	}

	public void setFundingMethodId(int fundingMethodId) {
		FundingMethodId = fundingMethodId;
	}

	public int getRFONumber() {
		return RFONumber;
	}

	public void setRFONumber(int rFONumber) {
		RFONumber = rFONumber;
	}

	public String getFileLocation() {
		return FileLocation;
	}

	public void setFileLocation(String fileLocation) {
		FileLocation = fileLocation;
	}

	public String getFileName() {
		return FileName;
	}

	public void setFileName(String fileName) {
		FileName = fileName;
	}

	public String getSize() {
		return Size;
	}

	public void setSize(String size) {
		Size = size;
	}

	public String getFileType() {
		return FileType;
	}

	public void setFileType(String fileType) {
		FileType = fileType;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getCreatedDateTime() {
		return CreatedDateTime;
	}

	public void setCreatedDateTime(String createdDateTime) {
		CreatedDateTime = createdDateTime;
	}

}
