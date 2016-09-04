package com.kientran.entities;

public class ModelSupport {
	private int AgreementVehicleGroupId, VehicleGroupId, AgreementNumber, VariantNumber;
	private String AnticipatedVol, CreatedDate;
	private int GroupedNumber;
	private String Order;

	public ModelSupport(int agreementVehicleGroupId, int vehicleGroupId, int agreementNumber, int variantNumber,
			String anticipatedVol, String createdDate, int groupedNumber, String order) {
		super();
		AgreementVehicleGroupId = agreementVehicleGroupId;
		VehicleGroupId = vehicleGroupId;
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		AnticipatedVol = anticipatedVol;
		CreatedDate = createdDate;
		GroupedNumber = groupedNumber;
		Order = order;
	}

	public ModelSupport() {
		super();
	}

	public int getAgreementVehicleGroupId() {
		return AgreementVehicleGroupId;
	}

	public void setAgreementVehicleGroupId(int agreementVehicleGroupId) {
		AgreementVehicleGroupId = agreementVehicleGroupId;
	}

	public int getVehicleGroupId() {
		return VehicleGroupId;
	}

	public void setVehicleGroupId(int vehicleGroupId) {
		VehicleGroupId = vehicleGroupId;
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

	public String getAnticipatedVol() {
		return AnticipatedVol;
	}

	public void setAnticipatedVol(String anticipatedVol) {
		AnticipatedVol = anticipatedVol;
	}

	public String getCreatedDate() {
		return CreatedDate;
	}

	public void setCreatedDate(String createdDate) {
		CreatedDate = createdDate;
	}

	public int getGroupedNumber() {
		return GroupedNumber;
	}

	public void setGroupedNumber(int groupedNumber) {
		GroupedNumber = groupedNumber;
	}

	public String getOrder() {
		return Order;
	}

	public void setOrder(String order) {
		Order = order;
	}

}
