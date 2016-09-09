package com.kientran.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

import com.kientran.entities.adaptors.DateTimeAdaptor;
import com.kientran.entities.pk.AgreementPK;

@Entity
@Table(name = "agreement")
public class Agreement implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private AgreementPK agreementPK;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "payment_to")
	private String paymentTo;

	@Column(name = "amis_account_code")
	private String amisAccountCode;

	@Column(name = "handling_change")
	private String handlingChange;

	@Column(name = "sign_required")
	private String signRequired;

	@Column(name = "sign_received")
	private String signReceived;

	@Column(name = "sign_received_date")
	private Date signReceivedDate;

	@Column(name = "dealer_visibility")
	private String dealerVisibility;

	@Column(name = "combinability")
	private String combinability;

	@Column(name = "number_of_registrations")
	private int numberOfRegistrations;

	@Column(name = "discount_unit")
	private String discountUnit;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_status_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastStatusUpdatedDate;

	@Column(name = "authorised_by")
	private String authorisedBy;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "authorsied_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date authorsiedDate;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "created_date", nullable = false, columnDefinition = "timestamp default 0")
	private Date createdDate;

	@Column(name = "created_by")
	private String createdBy;

	@Temporal(TemporalType.TIMESTAMP)
	@XmlJavaTypeAdapter(DateTimeAdaptor.class)
	@Column(name = "last_updated_date", nullable = false, columnDefinition = "timestamp default 0 on update current_timestamp")
	private Date lastUpdatedDate;

	@Column(name = "last_updated_by")
	private String lastUpdatedBy;

	@OneToMany(mappedBy = "agreement", cascade = CascadeType.ALL)
	private List<AgreementDealer> agreementDealerList = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "funding_method_id", referencedColumnName = "funding_method_id")
	private FundingMethod fundingMethod;

	@OneToMany(mappedBy = "agreement", cascade = CascadeType.ALL)
	private List<CreditNoteText> creaditNoteTextList = new ArrayList<>();

	@OneToOne(mappedBy = "agreement", cascade = CascadeType.ALL)
	private Volume volume;

	@ManyToOne
	@JoinColumn(name = "agreement_status_id", referencedColumnName = "agreement_status_id")
	private AgreementStatus agreementStatus;

	@OneToMany(mappedBy = "agreement", cascade = CascadeType.ALL)
	private List<AgreementDocument> agreementDocumentList = new ArrayList<>();

	@OneToMany(mappedBy = "agreement", cascade = CascadeType.ALL)
	private List<Comment> commentList = new ArrayList<>();

	@ManyToMany
	@JoinTable(name = "agreement_rfo", joinColumns = { @JoinColumn(name = "agreement_number"),
			@JoinColumn(name = "variant_number") }, inverseJoinColumns = @JoinColumn(name = "rfo_number"))
	private Set<RFONumber> rfoNumberSet = new HashSet<>();

	public Agreement() {
		super();
	}

	public Agreement(AgreementPK agreementPK) {
		super();
		this.agreementPK = agreementPK;
	}

	public AgreementPK getAgreementPK() {
		return agreementPK;
	}

	public void setAgreementPK(AgreementPK agreementPK) {
		this.agreementPK = agreementPK;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getLastStatusUpdatedDate() {
		return lastStatusUpdatedDate;
	}

	public void setLastStatusUpdatedDate(Date lastStatusUpdatedDate) {
		this.lastStatusUpdatedDate = lastStatusUpdatedDate;
	}

	public String getAuthorisedBy() {
		return authorisedBy;
	}

	public void setAuthorisedBy(String authorisedBy) {
		this.authorisedBy = authorisedBy;
	}

	public Date getAuthorsiedDate() {
		return authorsiedDate;
	}

	public void setAuthorsiedDate(Date authorsiedDate) {
		this.authorsiedDate = authorsiedDate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

	public String getLastUpdatedBy() {
		return lastUpdatedBy;
	}

	public void setLastUpdatedBy(String lastUpdatedBy) {
		this.lastUpdatedBy = lastUpdatedBy;
	}

	public String getPaymentTo() {
		return paymentTo;
	}

	public void setPaymentTo(String paymentTo) {
		this.paymentTo = paymentTo;
	}

	public String getAmisAccountCode() {
		return amisAccountCode;
	}

	public void setAmisAccountCode(String amisAccountCode) {
		this.amisAccountCode = amisAccountCode;
	}

	public String getHandlingChange() {
		return handlingChange;
	}

	public void setHandlingChange(String handlingChange) {
		this.handlingChange = handlingChange;
	}

	public String getSignRequired() {
		return signRequired;
	}

	public void setSignRequired(String signRequired) {
		this.signRequired = signRequired;
	}

	public String getSignReceived() {
		return signReceived;
	}

	public void setSignReceived(String signReceived) {
		this.signReceived = signReceived;
	}

	public Date getSignReceivedDate() {
		return signReceivedDate;
	}

	public void setSignReceivedDate(Date signReceivedDate) {
		this.signReceivedDate = signReceivedDate;
	}

	public String getDealerVisibility() {
		return dealerVisibility;
	}

	public void setDealerVisibility(String dealerVisibility) {
		this.dealerVisibility = dealerVisibility;
	}

	public String getCombinability() {
		return combinability;
	}

	public void setCombinability(String combinability) {
		this.combinability = combinability;
	}

	public int getNumberOfRegistrations() {
		return numberOfRegistrations;
	}

	public void setNumberOfRegistrations(int numberOfRegistrations) {
		this.numberOfRegistrations = numberOfRegistrations;
	}

	public String getDiscountUnit() {
		return discountUnit;
	}

	public void setDiscountUnit(String discountUnit) {
		this.discountUnit = discountUnit;
	}

	public List<AgreementDealer> getAgreementDealerList() {
		return agreementDealerList;
	}

	public void setAgreementDealerList(List<AgreementDealer> agreementDealerList) {
		this.agreementDealerList = agreementDealerList;
	}

	public FundingMethod getFundingMethod() {
		return fundingMethod;
	}

	public void setFundingMethod(FundingMethod fundingMethod) {
		this.fundingMethod = fundingMethod;
	}

	public List<CreditNoteText> getCreaditNoteTextList() {
		return creaditNoteTextList;
	}

	public void setCreaditNoteTextList(List<CreditNoteText> creaditNoteTextList) {
		this.creaditNoteTextList = creaditNoteTextList;
	}

	public Volume getVolume() {
		return volume;
	}

	public void setVolume(Volume volume) {
		this.volume = volume;
	}

	public AgreementStatus getAgreementStatus() {
		return agreementStatus;
	}

	public void setAgreementStatus(AgreementStatus agreementStatus) {
		this.agreementStatus = agreementStatus;
	}

	public List<AgreementDocument> getAgreementDocumentList() {
		return agreementDocumentList;
	}

	public void setAgreementDocumentList(List<AgreementDocument> agreementDocumentList) {
		this.agreementDocumentList = agreementDocumentList;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

	public Set<RFONumber> getRfoNumberSet() {
		return rfoNumberSet;
	}

	public void setRfoNumberSet(Set<RFONumber> rfoNumberSet) {
		this.rfoNumberSet = rfoNumberSet;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((agreementPK == null) ? 0 : agreementPK.hashCode());
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
		Agreement other = (Agreement) obj;
		if (agreementPK == null) {
			if (other.agreementPK != null)
				return false;
		} else if (!agreementPK.equals(other.agreementPK))
			return false;
		return true;
	}

}
