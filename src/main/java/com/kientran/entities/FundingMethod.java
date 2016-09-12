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
@Table(name = "funding_method")
public class FundingMethod implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "funding_method_id")
	private Long fundingMethodId;

	@Column(name = "funding_method_name")
	private String fundingMethodName;

	@Column(name = "funding_type")
	private String fundingType;

	@Column(name = "cost_centre")
	private String costCentre;

	@Column(name = "budget_code")
	private String budgetCode;

	@Column(name = "contract_template_location")
	private String contractTemplateLocation;

	@Column(name = "signed_contract_default")
	private String signedContractDefault;

	@Column(name = "status")
	private String status;

	@Column(name = "amis_dept_code")
	private String amisDeptCode;

	@Column(name = "amis_reason_code")
	private String amisReasonCode;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@OneToMany(mappedBy = "fundingMethod", cascade = CascadeType.ALL)
	@JsonBackReference(value = "agreement-funding")
	private List<Agreement> agreementList = new ArrayList<>();

	@OneToMany(mappedBy = "fundingMethod", cascade = CascadeType.ALL)
	@JsonBackReference
	private List<AgreementDocument> agreementDocumentList = new ArrayList<>();

	public FundingMethod() {
		super();
	}

	public FundingMethod(Long fundingMethodId) {
		super();
		this.fundingMethodId = fundingMethodId;
	}

	public Long getFundingMethodId() {
		return fundingMethodId;
	}

	public void setFundingMethodId(Long fundingMethodId) {
		this.fundingMethodId = fundingMethodId;
	}

	public String getFundingMethodName() {
		return fundingMethodName;
	}

	public void setFundingMethodName(String fundingMethodName) {
		this.fundingMethodName = fundingMethodName;
	}

	public String getFundingType() {
		return fundingType;
	}

	public void setFundingType(String fundingType) {
		this.fundingType = fundingType;
	}

	public String getCostCentre() {
		return costCentre;
	}

	public void setCostCentre(String costCentre) {
		this.costCentre = costCentre;
	}

	public String getBudgetCode() {
		return budgetCode;
	}

	public void setBudgetCode(String budgetCode) {
		this.budgetCode = budgetCode;
	}

	public String getContractTemplateLocation() {
		return contractTemplateLocation;
	}

	public void setContractTemplateLocation(String contractTemplateLocation) {
		this.contractTemplateLocation = contractTemplateLocation;
	}

	public String getSignedContractDefault() {
		return signedContractDefault;
	}

	public void setSignedContractDefault(String signedContractDefault) {
		this.signedContractDefault = signedContractDefault;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAmisDeptCode() {
		return amisDeptCode;
	}

	public void setAmisDeptCode(String amisDeptCode) {
		this.amisDeptCode = amisDeptCode;
	}

	public String getAmisReasonCode() {
		return amisReasonCode;
	}

	public void setAmisReasonCode(String amisReasonCode) {
		this.amisReasonCode = amisReasonCode;
	}

	public List<Agreement> getAgreementList() {
		return agreementList;
	}

	public void setAgreementList(List<Agreement> agreementList) {
		this.agreementList = agreementList;
	}

	public List<AgreementDocument> getAgreementDocumentList() {
		return agreementDocumentList;
	}

	public void setAgreementDocumentList(List<AgreementDocument> agreementDocumentList) {
		this.agreementDocumentList = agreementDocumentList;
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
		result = prime * result + ((fundingMethodId == null) ? 0 : fundingMethodId.hashCode());
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
		FundingMethod other = (FundingMethod) obj;
		if (fundingMethodId == null) {
			if (other.fundingMethodId != null)
				return false;
		} else if (!fundingMethodId.equals(other.fundingMethodId))
			return false;
		return true;
	}

}
