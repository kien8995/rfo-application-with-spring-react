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
import javax.persistence.Transient;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "agreement_document")
public class AgreementDocument implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "agreement_document_id")
	private Long agreementDocumentId;

	@Column(name = "file_location")
	private String fileLocation;

	@Column(name = "file_name")
	private String fileName;

	@Column(name = "size")
	private String size;

	@Column(name = "file_type")
	private String fileType;

	@Column(name = "status")
	private String status;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date_time", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDateTime;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumns({ @JoinColumn(name = "agreement_number", referencedColumnName = "agreement_number"),
			@JoinColumn(name = "variant_number", referencedColumnName = "variant_number") })
	@JsonIgnore
	private Agreement agreement;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "funding_method_id", referencedColumnName = "funding_method_id")
	@JsonBackReference(value = "fundingMethod-agreementDocument")
	private FundingMethod fundingMethod;

	@Transient
	private RFONumber rfoNumber;

	public AgreementDocument() {
		super();
	}

	public AgreementDocument(Long agreementDocumentId) {
		super();
		this.agreementDocumentId = agreementDocumentId;
	}

	public Long getAgreementDocumentId() {
		return agreementDocumentId;
	}

	public void setAgreementDocumentId(Long agreementDocumentId) {
		this.agreementDocumentId = agreementDocumentId;
	}

	public String getFileLocation() {
		return fileLocation;
	}

	public void setFileLocation(String fileLocation) {
		this.fileLocation = fileLocation;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreatedDateTime() {
		return createdDateTime;
	}

	public void setCreatedDateTime(Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}

	public Agreement getAgreement() {
		return agreement;
	}

	public void setAgreement(Agreement agreement) {
		this.agreement = agreement;
	}

	public FundingMethod getFundingMethod() {
		return fundingMethod;
	}

	public void setFundingMethod(FundingMethod fundingMethod) {
		this.fundingMethod = fundingMethod;
	}

	public RFONumber getRfoNumber() {
		return rfoNumber;
	}

	public void setRfoNumber(RFONumber rfoNumber) {
		this.rfoNumber = rfoNumber;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((agreementDocumentId == null) ? 0 : agreementDocumentId.hashCode());
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
		AgreementDocument other = (AgreementDocument) obj;
		if (agreementDocumentId == null) {
			if (other.agreementDocumentId != null)
				return false;
		} else if (!agreementDocumentId.equals(other.agreementDocumentId))
			return false;
		return true;
	}

}
