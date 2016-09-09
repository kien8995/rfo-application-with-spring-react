package com.kientran;

import javax.inject.Inject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kientran.repositories.AgreementRepository;
import com.kientran.repositories.CompanyRepository;
import com.kientran.repositories.CustomerTypeRepository;
import com.kientran.repositories.FundingMethodRepository;
import com.kientran.repositories.RFONumberRepository;
import com.kientran.repositories.RegionTypeRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Application.class, args);
	}

	@Inject
	private FundingMethodRepository fundingMethodRepository;

	@Inject
	private CompanyRepository companyRepositoty;

	@Inject
	private CustomerTypeRepository customerTypeRepository;

	@Inject
	private RegionTypeRepository regionTypeRepository;

	@Inject
	private RFONumberRepository rfoNumberRepository;

	@Inject
	private AgreementRepository agreementRepository;

	@Override
	public void run(String... strings) throws Exception {
		// add new rfo number
		// Company company = new Company();
		// company.setCompanyId(1L);
		// RFONumber rfoNumber = new RFONumber();
		// rfoNumber.setRfoNumber("S00428");
		// rfoNumber.setRfoName("Bank of England");
		// rfoNumber.setCustomerType(new CustomerType(1L));
		// rfoNumber.setCompany(company);
		// rfoNumber.setPostcode("RG21 3RF");
		// rfoNumber.setRegionType(new RegionType(1L));
		// rfoNumberRepository.save(rfoNumber);
		//
		// rfoNumber = new RFONumber();
		// rfoNumber.setRfoNumber("S00431");
		// rfoNumber.setRfoName("Bank of England");
		// rfoNumber.setCustomerType(new CustomerType(1L));
		// rfoNumber.setCompany(company);
		// rfoNumber.setPostcode("RO43 4TR ");
		// rfoNumber.setRegionType(new RegionType(3L));
		// rfoNumberRepository.save(rfoNumber);
		//
		// rfoNumber = new RFONumber();
		// rfoNumber.setRfoNumber("S00352");
		// rfoNumber.setRfoName("Thamesbank of Industries");
		// rfoNumber.setCustomerType(new CustomerType(1L));
		// rfoNumber.setCompany(company);
		// rfoNumber.setPostcode("SL7 52R");
		// rfoNumber.setRegionType(new RegionType(4L));
		// rfoNumberRepository.save(rfoNumber);
		//
		// rfoNumber = new RFONumber();
		// rfoNumber.setRfoNumber("S00844");
		// rfoNumber.setRfoName("Royal Bank of Scotland");
		// rfoNumber.setCustomerType(new CustomerType(1L));
		// rfoNumber.setCompany(company);
		// rfoNumber.setPostcode("AB5 7DD");
		// rfoNumber.setRegionType(new RegionType(4L));
		// rfoNumberRepository.save(rfoNumber);
		//
		// rfoNumber = new RFONumber();
		// rfoNumber.setRfoNumber("S00631");
		// rfoNumber.setRfoName("Southern Banking");
		// rfoNumber.setCustomerType(new CustomerType(1L));
		// rfoNumber.setCompany(company);
		// rfoNumber.setPostcode("SO7 8RW");
		// rfoNumber.setRegionType(new RegionType(3L));
		// rfoNumberRepository.save(rfoNumber);
		// ----------------
		// add new agreement
		// Agreement agreement = new Agreement();
		// agreement.setAgreementPK(new AgreementPK(123, 1));
		// agreement.setName("Agreement Name");
		// agreement.setDescription("Agreement Description");
		// agreement.setStartDate(new Date(2016, 9, 10));
		// agreement.setEndDate(new Date(2016, 9, 10));
		// agreement.setAgreementStatus(new AgreementStatus(1L));
		// agreement.setPaymentTo("Dealer");
		// agreement.setHandlingChange("100");
		// agreement.setFundingMethod(new FundingMethod(1L));
		//
		// Comment comment = new Comment();
		// comment.setAgreement(agreement);
		// comment.setComment("Comment");
		// agreement.getCommentList().add(comment);
		//
		// CreditNoteText creditNoteText = new CreditNoteText();
		// creditNoteText.setCreditNoteText("CreditNoteText");
		// creditNoteText.setAgreement(agreement);
		// agreement.getCreaditNoteTextList().add(creditNoteText);
		// agreement.setSignRequired("yes");
		// agreement.setDealerVisibility("DealerVisibility");
		// agreement.setCombinability("Combinability");
		// agreement.setNumberOfRegistrations(3);
		// agreement.setDiscountUnit("%");
		//
		// Volume volume = new Volume();
		// volume.setAgreement(agreement);
		// Banding banding = new Banding();
		// banding.setVolume(volume);
		// banding.setMin(1);
		// banding.setMax(100);
		// volume.getBandingList().add(banding);
		//
		// agreement.setVolume(volume);
		//
		// agreementRepository.save(agreement);
		// ----------------
		// update agreement status
		// Agreement agreement = new Agreement();
		// agreement.setAgreementPK(new AgreementPK(123, 1));
		// agreement.setAgreementStatus(new AgreementStatus(2L));
		// agreementRepository.save(agreement);
	}
}
