package com.kientran.entities.adaptors;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class DateAdaptor extends XmlAdapter<String, Date> {

	private DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public Date unmarshal(String v) throws Exception {
		return dateFormat.parse(v);
	}

	@Override
	public String marshal(Date v) throws Exception {
		return dateFormat.format(v);
	}
}
