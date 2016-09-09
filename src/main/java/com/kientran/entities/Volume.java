package com.kientran.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "volume")
public class Volume implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "volume_id")
	private Long volumeId;

	@Column(name = "trigger_credit")
	private String triggerCredit;

	@Column(name = "payment_to")
	private String paymentTo;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumns({ @JoinColumn(name = "agreement_number", referencedColumnName = "agreement_number"),
			@JoinColumn(name = "variant_number", referencedColumnName = "variant_number") })
	private Agreement agreement;

	@OneToMany(mappedBy = "volume", cascade = CascadeType.ALL)
	private List<Banding> bandingList = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "volume_restriction_type_id", referencedColumnName = "volume_restriction_type_id")
	private VolumeRestrictionType volumeRestrictionType;

	public Volume() {
		super();
	}

	public Volume(Long volumeId) {
		super();
		this.volumeId = volumeId;
	}

	public Long getVolumeId() {
		return volumeId;
	}

	public void setVolumeId(Long volumeId) {
		this.volumeId = volumeId;
	}

	public String getTriggerCredit() {
		return triggerCredit;
	}

	public void setTriggerCredit(String triggerCredit) {
		this.triggerCredit = triggerCredit;
	}

	public String getPaymentTo() {
		return paymentTo;
	}

	public void setPaymentTo(String paymentTo) {
		this.paymentTo = paymentTo;
	}

	public Agreement getAgreement() {
		return agreement;
	}

	public void setAgreement(Agreement agreement) {
		this.agreement = agreement;
	}

	public List<Banding> getBandingList() {
		return bandingList;
	}

	public void setBandingList(List<Banding> bandingList) {
		this.bandingList = bandingList;
	}

	public VolumeRestrictionType getVolumeRestrictionType() {
		return volumeRestrictionType;
	}

	public void setVolumeRestrictionType(VolumeRestrictionType volumeRestrictionType) {
		this.volumeRestrictionType = volumeRestrictionType;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((volumeId == null) ? 0 : volumeId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Volume other = (Volume) obj;
		if (volumeId == null) {
			if (other.volumeId != null)
				return false;
		} else if (!volumeId.equals(other.volumeId))
			return false;
		return true;
	}

}
