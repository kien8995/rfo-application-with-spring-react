package com.kientran.resources;

import java.util.List;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kientran.entities.RFONumber;
import com.kientran.repositories.RFONumberRepository;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class RFONumberResource {

	@Inject
	private RFONumberRepository rfoNumberRepository;

	@RequestMapping(path = "/customers", method = RequestMethod.GET)
	public ResponseEntity<List<RFONumber>> getAll() {
		List<RFONumber> result = rfoNumberRepository.findAll();
		return new ResponseEntity<List<RFONumber>>(result, HttpStatus.OK);
	}
}
