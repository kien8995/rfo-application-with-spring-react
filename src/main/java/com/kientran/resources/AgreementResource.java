package com.kientran.resources;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kientran.entities.Agreement;
import com.kientran.repositories.AgreementRepository;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class AgreementResource {

	@Inject
	private AgreementRepository agreementRepository;

	@RequestMapping(path = "/agreements", method = RequestMethod.GET)
	public ResponseEntity<List<Agreement>> getAll() {
		List<Agreement> result = agreementRepository.findAll();
		return new ResponseEntity<List<Agreement>>(result, HttpStatus.OK);
	}

	@RequestMapping(path = "/agreements", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Agreement> add(@RequestBody Agreement agreement) {
		Agreement result = agreementRepository.save(agreement);
		return new ResponseEntity<Agreement>(result, HttpStatus.CREATED);
	}

	@RequestMapping(path = "/agreements", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Agreement> update(@RequestBody Agreement agreement) {
		Agreement result = agreementRepository.save(agreement);
		return new ResponseEntity<Agreement>(result, HttpStatus.OK);
	}
}
