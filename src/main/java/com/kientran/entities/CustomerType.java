package com.kientran.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "customer_type")
public class CustomerType implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_type_id", nullable = false)
	private Long customerTypeId;

	@Column(name = "customer_type")
	private String customerType;

	@OneToMany(mappedBy = "customerType", cascade = CascadeType.ALL)
	private List<RFONumber> rfoNumberList = new ArrayList<>();

	public CustomerType() {
		super();
	}

	public Long getCustomerTypeId() {
		return customerTypeId;
	}

	public void setCustomerTypeId(Long customerTypeId) {
		this.customerTypeId = customerTypeId;
	}

	public String getCustomerType() {
		return customerType;
	}

	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	public List<RFONumber> getRfoNumberList() {
		return rfoNumberList;
	}

	public void setRfoNumberList(List<RFONumber> rfoNumberList) {
		this.rfoNumberList = rfoNumberList;
	}

}
