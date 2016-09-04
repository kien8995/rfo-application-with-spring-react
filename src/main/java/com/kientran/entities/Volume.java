package com.kientran.entities;

public class Volume {
	private int VolumeId, AgreementNumber, VariantNumber;
	private String TriggerCredit, PaymentTo;

	public Volume() {
		super();
	}

	public Volume(int volumeId, int agreementNumber, int variantNumber, String triggerCredit, String paymentTo) {
		super();
		VolumeId = volumeId;
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		TriggerCredit = triggerCredit;
		PaymentTo = paymentTo;
	}

	public int getVolumeId() {
		return VolumeId;
	}

	public void setVolumeId(int volumeId) {
		VolumeId = volumeId;
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

	public String getTriggerCredit() {
		return TriggerCredit;
	}

	public void setTriggerCredit(String triggerCredit) {
		TriggerCredit = triggerCredit;
	}

	public String getPaymentTo() {
		return PaymentTo;
	}

	public void setPaymentTo(String paymentTo) {
		PaymentTo = paymentTo;
	}

}
