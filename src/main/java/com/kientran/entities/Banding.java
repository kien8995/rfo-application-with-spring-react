package com.kientran.entities;

public class Banding {
	private int BandingId, VolumeId, Min, Max;

	public Banding() {
		super();
	}

	public Banding(int bandingId, int volumeId, int min, int max) {
		super();
		BandingId = bandingId;
		VolumeId = volumeId;
		Min = min;
		Max = max;
	}

	public int getBandingId() {
		return BandingId;
	}

	public void setBandingId(int bandingId) {
		BandingId = bandingId;
	}

	public int getVolumeId() {
		return VolumeId;
	}

	public void setVolumeId(int volumeId) {
		VolumeId = volumeId;
	}

	public int getMin() {
		return Min;
	}

	public void setMin(int min) {
		Min = min;
	}

	public int getMax() {
		return Max;
	}

	public void setMax(int max) {
		Max = max;
	}

}
