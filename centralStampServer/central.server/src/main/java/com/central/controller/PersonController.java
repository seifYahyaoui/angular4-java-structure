package com.central.controller;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.central.model.Person;
import com.central.service.PersonService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
@RequestMapping("person")
public class PersonController {

	@Autowired
	private PersonService personService;

	@RequestMapping("{id}")
	public Person getPerson(@PathVariable("id") String id) {
		return personService.getPerson(id);
	}
	
	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = "application/json")
	public Collection<Person> getAll() {
		return personService.getAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Void> createPerson(@RequestBody Person person) {
		personService.createPerson(person);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public Person updatePerson(@PathVariable("id") String id, @RequestBody Person person) {
		return personService.updatePerson(person);
	}

	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deletPerson(@PathVariable("id") String id) {
		personService.deletePerson(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	
	
	
	
	
	

	// @PostMapping("")
	// public ResponseEntity<Void> createArticle(@RequestBody Person person) {
	// System.out.println("person : "+ person);
	// Person flag = personService.createPerson(person);
	// if (flag == null) {
	// return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	// }
	// // HttpHeaders headers = new HttpHeaders();
	// //
	// headers.setLocation(builder.path("?id={id}").buildAndExpand(flag.getId()).toUri());
	//
	// return new ResponseEntity<Void>(HttpStatus.CREATED);
	// }
}
