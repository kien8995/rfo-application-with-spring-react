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
@Table(name = "region_type")
public class RegionType implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "region_type_id")
	private Long regionTypeId;

	@Column(name = "region_type")
	private String regionType;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@OneToMany(mappedBy = "regionType", cascade = CascadeType.ALL)
	@JsonBackReference(value = "region-rfo")
	private List<RFONumber> rfoNumberList = new ArrayList<>();

	public RegionType() {
		super();
	}

	public RegionType(Long regionTypeId) {
		super();
		this.regionTypeId = regionTypeId;
	}

	public Long getRegionTypeId() {
		return regionTypeId;
	}

	public void setRegionTypeId(Long regionTypeId) {
		this.regionTypeId = regionTypeId;
	}

	public String getRegionType() {
		return regionType;
	}

	public void setRegionType(String regionType) {
		this.regionType = regionType;
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

	public List<RFONumber> getRfoNumberList() {
		return rfoNumberList;
	}

	public void setRfoNumberList(List<RFONumber> rfoNumberList) {
		this.rfoNumberList = rfoNumberList;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((regionTypeId == null) ? 0 : regionTypeId.hashCode());
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
		RegionType other = (RegionType) obj;
		if (regionTypeId == null) {
			if (other.regionTypeId != null)
				return false;
		} else if (!regionTypeId.equals(other.regionTypeId))
			return false;
		return true;
	}

}
