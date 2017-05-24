package com.central.controller;

import java.util.Hashtable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.central.model.Person;
import com.central.service.PersonService;

@RestController
@RequestMapping("persons")
public class PersonController {

	@Autowired
	private PersonService personService;

	@RequestMapping(value="/all", method=RequestMethod.GET, produces="application/json")
	public Hashtable<String, Person> getAll() {
		return personService.getAll();
	}

	@RequestMapping("{id}")
	public Person getPerson(@PathVariable("id") String id) {
		return personService.getPerson(id);
	}

}
