package com.kientran.entities;

public class CreditNoteText {
	private int CreditNoteTextId, AgreementNumber, VariantNumber, ClaimId, UserId, CommentTypeId;
	private String DateTime, Comment;

	public CreditNoteText() {
		super();
	}

	public CreditNoteText(int creditNoteTextId, int agreementNumber, int variantNumber, int claimId, int userId,
			int commentTypeId, String dateTime, String comment) {
		super();
		CreditNoteTextId = creditNoteTextId;
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		ClaimId = claimId;
		UserId = userId;
		CommentTypeId = commentTypeId;
		DateTime = dateTime;
		Comment = comment;
	}

	public int getCreditNoteTextId() {
		return CreditNoteTextId;
	}

	public void setCreditNoteTextId(int creditNoteTextId) {
		CreditNoteTextId = creditNoteTextId;
	}

	public int getAgreementNumber() {
		return AgreementNumber;
	}

	public void setAgreementNumber(int agreementNumber) {
		AgreementNumber = agreementNumber;
	}

	public int getVariantNumber() {
		return VariantNumber;
	}

	public void setVariantNumber(int variantNumber) {
		VariantNumber = variantNumber;
	}

	public int getClaimId() {
		return ClaimId;
	}

	public void setClaimId(int claimId) {
		ClaimId = claimId;
	}

	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public int getCommentTypeId() {
		return CommentTypeId;
	}

	public void setCommentTypeId(int commentTypeId) {
		CommentTypeId = commentTypeId;
	}

	public String getDateTime() {
		return DateTime;
	}

	public void setDateTime(String dateTime) {
		DateTime = dateTime;
	}

	public String getComment() {
		return Comment;
	}

	public void setComment(String comment) {
		Comment = comment;
	}

}
