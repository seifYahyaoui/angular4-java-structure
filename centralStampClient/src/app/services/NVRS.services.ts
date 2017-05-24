/**
 * Created by seif on 5/23/17.
 */

import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Person} from "../model/model";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class NVRSerices {

  public url : string = "http://localhost:8080/persons";

  constructor(private _http: Http){

  }

  public getAllPersons(){

    return this._http.get('http://localhost:8080/persons/all')
      .map(response => response.json());
  }
  /*
  *  public getAllPersons():Person[]{

   return this._http.get('http://localhost:8080/persons/all')
   .map(response => {
   let persons : Person = [];
   response.json().forEach(item =>{
   let person : Person = new Person();

   });
   return persons;
   });
  * */

}
