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
@Table(name = "credit_note_text")
public class CreditNoteText implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "credit_note_text_id", nullable = false)
	private Long creditNoteTextId;

	@Column(name = "credit_note_text")
	private String creditNoteText;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "date_time", nullable = false, columnDefinition = "timestamp default 0")
	private Date dateTime;

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
	@JsonBackReference(value = "agreement-creaditNoteText")
	private Agreement agreement;

	public CreditNoteText() {
		super();
	}

	public CreditNoteText(Long creditNoteTextId) {
		super();
		this.creditNoteTextId = creditNoteTextId;
	}

	public Long getCreditNoteTextId() {
		return creditNoteTextId;
	}

	public void setCreditNoteTextId(Long creditNoteTextId) {
		this.creditNoteTextId = creditNoteTextId;
	}

	public String getCreditNoteText() {
		return creditNoteText;
	}

	public void setCreditNoteText(String creditNoteText) {
		this.creditNoteText = creditNoteText;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
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
		result = prime * result + ((creditNoteTextId == null) ? 0 : creditNoteTextId.hashCode());
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
		CreditNoteText other = (CreditNoteText) obj;
		if (creditNoteTextId == null) {
			if (other.creditNoteTextId != null)
				return false;
		} else if (!creditNoteTextId.equals(other.creditNoteTextId))
			return false;
		return true;
	}

}
