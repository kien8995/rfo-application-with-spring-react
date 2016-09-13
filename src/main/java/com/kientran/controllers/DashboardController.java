package com.kientran.controllers;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.kientran.repositories.AgreementDealerRepository;
import com.kientran.repositories.AgreementRepository;
import com.kientran.repositories.RFONumberRepository;
import com.kientran.utils.State;

@Controller
public class DashboardController {

	@Inject
	private AgreementRepository agreementRepository;

	@Inject
	private AgreementDealerRepository agreementDealerRepository;

	@Inject
	private RFONumberRepository rfoNumberRepository;

	@RequestMapping(value = { "/dashboard/*" }, method = RequestMethod.GET)
	public String dashboard(Model model, HttpServletRequest request) {
		State.populateModel(model, request);
		model.addAttribute("agreements", agreementRepository.findAll());
		model.addAttribute("dealers", agreementDealerRepository.findAll());
		model.addAttribute("customers", rfoNumberRepository.findAll());
		return "index";
	}
}
