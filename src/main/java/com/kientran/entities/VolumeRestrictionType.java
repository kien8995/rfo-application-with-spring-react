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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "volume_restriction_type")
public class VolumeRestrictionType implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "volume_restriction_type_id")
	private Long volumeRestrictionTypeId;

	@Column(name = "volume_restriction_type")
	private String VolumeRestrictionType;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@OneToMany(mappedBy = "volumeRestrictionType", cascade = CascadeType.ALL)
	@JsonBackReference
	private List<Volume> volumeList = new ArrayList<>();

	public VolumeRestrictionType() {
		super();
	}

	public VolumeRestrictionType(Long volumeRestrictionTypeId) {
		super();
		this.volumeRestrictionTypeId = volumeRestrictionTypeId;
	}

	public Long getVolumeRestrictionTypeId() {
		return volumeRestrictionTypeId;
	}

	public void setVolumeRestrictionTypeId(Long volumeRestrictionTypeId) {
		this.volumeRestrictionTypeId = volumeRestrictionTypeId;
	}

	public String getVolumeRestrictionType() {
		return VolumeRestrictionType;
	}

	public void setVolumeRestrictionType(String volumeRestrictionType) {
		VolumeRestrictionType = volumeRestrictionType;
	}

	public List<Volume> getVolumeList() {
		return volumeList;
	}

	public void setVolumeList(List<Volume> volumeList) {
		this.volumeList = volumeList;
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
		result = prime * result + ((volumeRestrictionTypeId == null) ? 0 : volumeRestrictionTypeId.hashCode());
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
		VolumeRestrictionType other = (VolumeRestrictionType) obj;
		if (volumeRestrictionTypeId == null) {
			if (other.volumeRestrictionTypeId != null)
				return false;
		} else if (!volumeRestrictionTypeId.equals(other.volumeRestrictionTypeId))
			return false;
		return true;
	}

}
