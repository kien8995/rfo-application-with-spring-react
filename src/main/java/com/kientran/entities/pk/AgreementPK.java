package com.kientran.entities.pk;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AgreementPK implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "agreement_number", nullable = false)
	private int agreementNumber;

	@Column(name = "variant_number", nullable = false)
	private int variantNumber;

	public AgreementPK() {
		super();
	}

	public AgreementPK(int agreementNumber, int variantNumber) {
		super();
		this.agreementNumber = agreementNumber;
		this.variantNumber = variantNumber;
	}

	public int getAgreementNumber() {
		return agreementNumber;
	}

	public void setAgreementNumber(int agreementNumber) {
		this.agreementNumber = agreementNumber;
	}

	public int getVariantNumber() {
		return variantNumber;
	}

	public void setVariantNumber(int variantNumber) {
		this.variantNumber = variantNumber;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + agreementNumber;
		result = prime * result + variantNumber;
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
		AgreementPK other = (AgreementPK) obj;
		if (agreementNumber != other.agreementNumber)
			return false;
		if (variantNumber != other.variantNumber)
			return false;
		return true;
	}

}
