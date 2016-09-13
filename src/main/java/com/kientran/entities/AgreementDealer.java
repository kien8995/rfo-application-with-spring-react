package com.kientran.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "agreement_dealer")
public class AgreementDealer implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "agreement_dealer_id")
	private Long agreementDealerId;

	@Column(name = "dealer_code")
	private String dealerCode;

	@Column(name = "dealer_name")
	private String dealerName;

	@Column(name = "dealer_town")
	private String dealerTown;

	@Column(name = "dealer_country")
	private String dealerCountry;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumns({ @JoinColumn(name = "agreement_number", referencedColumnName = "agreement_number"),
			@JoinColumn(name = "variant_number", referencedColumnName = "variant_number") })
	@JsonBackReference(value = "agreement-dealer")
	private Agreement agreement;

	public AgreementDealer() {
		super();
	}

	public AgreementDealer(Long agreementDealerId) {
		super();
		this.agreementDealerId = agreementDealerId;
	}

	public Long getAgreementDealerId() {
		return agreementDealerId;
	}

	public void setAgreementDealerId(Long agreementDealerId) {
		this.agreementDealerId = agreementDealerId;
	}

	public String getDealerCode() {
		return dealerCode;
	}

	public void setDealerCode(String dealerCode) {
		this.dealerCode = dealerCode;
	}

	public String getDealerName() {
		return dealerName;
	}

	public void setDealerName(String dealerName) {
		this.dealerName = dealerName;
	}

	public String getDealerTown() {
		return dealerTown;
	}

	public void setDealerTown(String dealerTown) {
		this.dealerTown = dealerTown;
	}

	public String getDealerCountry() {
		return dealerCountry;
	}

	public void setDealerCountry(String dealerCountry) {
		this.dealerCountry = dealerCountry;
	}

	public Agreement getAgreement() {
		return agreement;
	}

	public void setAgreement(Agreement agreement) {
		this.agreement = agreement;
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
		result = prime * result + ((agreementDealerId == null) ? 0 : agreementDealerId.hashCode());
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
		AgreementDealer other = (AgreementDealer) obj;
		if (agreementDealerId == null) {
			if (other.agreementDealerId != null)
				return false;
		} else if (!agreementDealerId.equals(other.agreementDealerId))
			return false;
		return true;
	}

}
