import {Injectable} from "@angular/core";
import {Person} from "./model";
/**
 * Created by seif on 6/7/17.
 */
@Injectable()
export class PersonService {

  persons: Map<number,Person> = new Map<number,Person>();

  constructor() {
    this.persons.set(1, new Person('sam', 'Paris', 'sam@gmail.com', 1));
    this.persons.set(2, new Person('alex', 'Paris', 'alex@gmail.com', 2));
    this.persons.set(3, new Person('lee', 'Japan', 'lee@gmail.com', 3));
    this.persons.set(4, new Person('sam', 'Paris', 'sam@gmail.com', 4));
  }

  getAllPersons(): Person[] {
    return Array.from(this.persons.values());
  }

  getPersonById(id: number): Person {
    return this.persons.get(id);
  }
}
