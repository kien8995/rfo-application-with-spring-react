package com.kientran.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "rfo_number")
public class RFONumber implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rfo_number_id")
	private Long rfoNumberId;

	@Column(name = "rfo_number", nullable = false, unique = true)
	private String rfoNumber;

	@Column(name = "rfo_name")
	private String rfoName;

	@Column(name = "postcode")
	private String postcode;

	@Column(name = "created_by")
	private String createdBy;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date updatedDate;

	@Column(name = "updated_by")
	private String updatedBy;

	@ManyToOne
	@JoinColumn(name = "customer_type_id", referencedColumnName = "customer_type_id")
	@JsonManagedReference(value = "customer-rfo")
	private CustomerType customerType;

	@ManyToOne
	@JoinColumn(name = "region_type_id", referencedColumnName = "region_type_id")
	@JsonManagedReference(value = "region-rfo")
	private RegionType regionType;

	@ManyToOne
	@JoinColumn(name = "company_id", referencedColumnName = "company_id")
	@JsonManagedReference(value = "company-rfo")
	private Company company;

	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "rfoNumberSet")
	@JsonBackReference(value = "agreement-rfo")
	private Set<Agreement> agreementSet = new HashSet<>();

	public RFONumber() {
		super();
	}

	public RFONumber(String rfoNumber) {
		super();
		this.rfoNumber = rfoNumber;
	}

	public Long getRfoNumberId() {
		return rfoNumberId;
	}

	public void setRfoNumberId(Long rfoNumberId) {
		this.rfoNumberId = rfoNumberId;
	}

	public String getRfoNumber() {
		return rfoNumber;
	}

	public void setRfoNumber(String rfoNumber) {
		this.rfoNumber = rfoNumber;
	}

	public String getRfoName() {
		return rfoName;
	}

	public void setRfoName(String rfoName) {
		this.rfoName = rfoName;
	}

	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public CustomerType getCustomerType() {
		return customerType;
	}

	public void setCustomerType(CustomerType customerType) {
		this.customerType = customerType;
	}

	public RegionType getRegionType() {
		return regionType;
	}

	public void setRegionType(RegionType regionType) {
		this.regionType = regionType;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Set<Agreement> getAgreementSet() {
		return agreementSet;
	}

	public void setAgreementSet(Set<Agreement> agreementSet) {
		this.agreementSet = agreementSet;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((rfoNumber == null) ? 0 : rfoNumber.hashCode());
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
		RFONumber other = (RFONumber) obj;
		if (rfoNumber == null) {
			if (other.rfoNumber != null)
				return false;
		} else if (!rfoNumber.equals(other.rfoNumber))
			return false;
		return true;
	}

}
