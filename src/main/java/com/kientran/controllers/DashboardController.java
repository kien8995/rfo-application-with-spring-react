package com.kientran.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.kientran.utils.State;

@Controller
public class DashboardController {

	@RequestMapping(value = { "/dashboard/*" }, method = RequestMethod.GET)
	public String dashboard(Model model, HttpServletRequest request) {
		State.populateModel(model, request);

		return "index";
	}
}
