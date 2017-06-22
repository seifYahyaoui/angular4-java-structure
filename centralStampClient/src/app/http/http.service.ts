/**
 * Created by seif on 6/13/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Person} from "../model/model";

@Injectable()
export class PersonHttpService {
  url = "http://localhost:8080/person";

  constructor(private http: Http) {
  }

  public getAllPersons(): Observable<Person[]> {

    return this.http.get(this.url+'/all')
      .map(response => {
        let persons = [];
        let res = response.json();

        for (var i = 0; i < res.length; i++) {
          console.log('index : ' + i)
          let person: Person = new Person();

          person.id = res[i].id;
          person.firstName = res[i].firstName;
          person.lastName = res[i].lastName;
          person.age = res[i].age;
          persons.push(person);
        }
        ;
        return persons;
      });
  }

  addPerson(person: Person): Observable<number> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url, JSON.stringify(person), options)
      .map(success => success.status);

  }

  updatePerson(person: Person): Observable<Person> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.url + '/' + person.id, JSON.stringify(person), options)
      .map((res: Response)=> {
        let r = res.json();
        console.log('update person : ', r);
      })
      .catch(this.handleErrorObservable);
  }

  deletePerson(id: string): Observable<number> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let params = new URLSearchParams();
    //params.set('id', id);
    let options = new RequestOptions({headers: headers, params: params});
    return this.http.delete(this.url + '/' + id).map(success => success.status);
  }

  getPersonsWithObservable(): Observable<Person[]> {
    return this.http.get(this.url + '/all')
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getPersonsWithPromise(): Promise<Person[]> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  addPersonWithPromise(person: Person): Promise<Person> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url, person, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error('=================' + error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }




}
