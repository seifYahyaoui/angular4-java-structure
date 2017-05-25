package com.central.service;

import java.util.Collection;
import java.util.Hashtable;

import org.springframework.stereotype.Service;

import com.central.model.Person;

@Service
public class PersonService {

	private Hashtable<String, Person> persons = new Hashtable<>();

	public PersonService() {
		
		Person person1 = new Person();
		person1.setId("1");
		person1.setFirstName("seif");
		person1.setLastName("yahyaoui");
		persons.put("1", person1);
		
		Person person = new Person();
		person.setId("2");
		person.setFirstName("seif");
		person.setLastName("yahyaoui");
		persons.put("2", person);
	}

	public Person getPerson(String id) {
		Person p = persons.get(id);
		return p;
	}

	public Collection< Person> getAll() {
		return persons.values();
	}
}
