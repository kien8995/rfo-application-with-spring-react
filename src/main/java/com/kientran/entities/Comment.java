package com.kientran.entities;

public class Comment {
	private int CommentId, AgreementNumber, VariantNumber, ClaimId, UserId;
	private String DateTime, Comment;
	private int CommentTypeId;

	public Comment() {
		super();
	}

	public Comment(int commentId, int agreementNumber, int variantNumber, int claimId, int userId, String dateTime,
			String comment, int commentTypeId) {
		super();
		CommentId = commentId;
		AgreementNumber = agreementNumber;
		VariantNumber = variantNumber;
		ClaimId = claimId;
		UserId = userId;
		DateTime = dateTime;
		Comment = comment;
		CommentTypeId = commentTypeId;
	}

	public int getCommentId() {
		return CommentId;
	}

	public void setCommentId(int commentId) {
		CommentId = commentId;
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

	public int getCommentTypeId() {
		return CommentTypeId;
	}

	public void setCommentTypeId(int commentTypeId) {
		CommentTypeId = commentTypeId;
	}

}
