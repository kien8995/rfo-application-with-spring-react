package com.kientran.resources;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kientran.entities.AgreementDealer;
import com.kientran.repositories.AgreementDealerRepository;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class AgreementDealerResource {

	@Inject
	private AgreementDealerRepository agreementDealerRepository;

	@RequestMapping(path = "/dealers", method = RequestMethod.GET)
	public ResponseEntity<List<AgreementDealer>> getAll() {
		List<AgreementDealer> result = agreementDealerRepository.findAll();
		return new ResponseEntity<List<AgreementDealer>>(result, HttpStatus.OK);
	}
}
