package com.kientran.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "rfo_number")
public class RFONumber implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rfo_number")
	private Long rfoNumber;

	@Column(name = "rfoName")
	private String rfoName;

	@Column(name = "postcode")
	private String postcode;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "updated_date")
	private Date updatedDate;

	@Column(name = "created_by")
	private String updatedBy;

	@ManyToOne
	@JoinColumn(name = "customer_type_id", referencedColumnName = "customer_type_id")
	private CustomerType customerType;

	@ManyToOne
	@JoinColumn(name = "company_id", referencedColumnName = "company_id")
	private Company company;

	public RFONumber() {
		super();
	}

	public Long getRfoNumber() {
		return rfoNumber;
	}

	public void setRfoNumber(Long rfoNumber) {
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

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

}
