package com.kientran.entities;

public class CommentType {
	private int CommentTypeId;
	private String CommentType;

	public CommentType() {
		super();
	}

	public CommentType(int commentTypeId, String commentType) {
		super();
		CommentTypeId = commentTypeId;
		CommentType = commentType;
	}

	public int getCommentTypeId() {
		return CommentTypeId;
	}

	public void setCommentTypeId(int commentTypeId) {
		CommentTypeId = commentTypeId;
	}

	public String getCommentType() {
		return CommentType;
	}

	public void setCommentType(String commentType) {
		CommentType = commentType;
	}

}
