package com.kientran.entities;

public class VolumeRestrictionType {
	private int VolumeRestrictionTypeId;
	private String VolumeRestrictionType;

	public VolumeRestrictionType() {
		super();
	}

	public VolumeRestrictionType(int volumeRestrictionTypeId, String volumeRestrictionType) {
		super();
		VolumeRestrictionTypeId = volumeRestrictionTypeId;
		VolumeRestrictionType = volumeRestrictionType;
	}

	public int getVolumeRestrictionTypeId() {
		return VolumeRestrictionTypeId;
	}

	public void setVolumeRestrictionTypeId(int volumeRestrictionTypeId) {
		VolumeRestrictionTypeId = volumeRestrictionTypeId;
	}

	public String getVolumeRestrictionType() {
		return VolumeRestrictionType;
	}

	public void setVolumeRestrictionType(String volumeRestrictionType) {
		VolumeRestrictionType = volumeRestrictionType;
	}

}
