package com.kientran.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agreement")
public class Agreement implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "agreement_number", nullable = false)
	private Long agreementNumber;

	@Column(name = "variant_number")
	private int variantNumber;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "last_status_updated_date")
	private Date lastStatusUpdatedDate;

	@Column(name = "authorised_by")
	private String authorisedBy;

	@Column(name = "authorsied_date")
	private Date authorsiedDate;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "last_updated_date")
	private Date lastUpdatedDate;

	@Column(name = "last_updated_by")
	private String lastUpdatedBy;

	@Column(name = "payment_to")
	private String paymentTo;

	@Column(name = "amis_account_code")
	private String amisAccountCode;

	@Column(name = "handling_change")
	private String handlingChange;
	private int FundingMethodId, CreaditNoteId;
	private String SignRequired, SignReceived, SignReceivedDate, DealerVisibility, Combinability;
	private int NumberOfRegistrations, VolumeId;
	private String DiscountUnit;

	private int StatusId;

	public Agreement() {
		super();
	}

}
