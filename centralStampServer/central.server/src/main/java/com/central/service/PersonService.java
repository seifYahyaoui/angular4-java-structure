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
		person1.setAge(25);
		persons.put("1", person1);
		
		Person person = new Person();
		person.setId("2");
		person.setFirstName("ahmed");
		person.setLastName("youssfi");
		person.setAge(25);
		persons.put("2", person);
		
		Person person2 = new Person();
		person2.setId("3");
		person2.setFirstName("marwen");
		person2.setLastName("mahmoud");
		person2.setAge(25);
		persons.put("3", person2);
	}

	public Person getPerson(String id) {
		Person p = persons.get(id);
		return p;
	}

	public Collection< Person> getAll() {
		return persons.values();
	}
}
