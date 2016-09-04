package com.kientran.entities;

public class AgreementDealer {
	private int AgreementNumber, VariantNumber;
	private String DealerCode;

	public AgreementDealer() {
		super();
	}

	public AgreementDealer(int agreementNumber, int variantNumber, String dealerCode) {
		super();
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		DealerCode = dealerCode;
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

	public String getDealerCode() {
		return DealerCode;
	}

	public void setDealerCode(String dealerCode) {
		DealerCode = dealerCode;
	}

}
