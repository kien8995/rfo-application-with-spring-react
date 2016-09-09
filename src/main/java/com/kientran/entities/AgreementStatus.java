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

import com.kientran.entities.adaptors.DateTimeAdaptor;

@Entity
@Table(name = "agreement_status")
public class AgreementStatus implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "agreement_status_id")
	private Long agreementStatusId;

	@Column(name = "status")
	private String status;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@OneToMany(mappedBy = "agreementStatus", cascade = CascadeType.ALL)
	private List<Agreement> agreementList = new ArrayList<>();

	public AgreementStatus() {
		super();
	}

	public AgreementStatus(Long agreementStatusId) {
		super();
		this.agreementStatusId = agreementStatusId;
	}

	public Long getAgreementStatusId() {
		return agreementStatusId;
	}

	public void setAgreementStatusId(Long agreementStatusId) {
		this.agreementStatusId = agreementStatusId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Agreement> getAgreementList() {
		return agreementList;
	}

	public void setAgreementList(List<Agreement> agreementList) {
		this.agreementList = agreementList;
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
		result = prime * result + ((agreementStatusId == null) ? 0 : agreementStatusId.hashCode());
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
		AgreementStatus other = (AgreementStatus) obj;
		if (agreementStatusId == null) {
			if (other.agreementStatusId != null)
				return false;
		} else if (!agreementStatusId.equals(other.agreementStatusId))
			return false;
		return true;
	}

}
