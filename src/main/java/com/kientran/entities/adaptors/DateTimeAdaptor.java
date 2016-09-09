package com.kientran.entities.adaptors;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class DateTimeAdaptor extends XmlAdapter<String, Date> {

	private DateFormat dateTimeFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");

	@Override
	public Date unmarshal(String v) throws Exception {
		return dateTimeFormat.parse(v);
	}

	@Override
	public String marshal(Date v) throws Exception {
		return dateTimeFormat.format(v);
	}
}
