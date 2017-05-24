/**
 * Created by seif on 5/24/17.
 */

export class Person{

  private _id : string;
  private _firsTname : string;
  private _lastName : string;
  private _age : number;

  set id(value: string) {
    this._id = value;
  }

  set firsTname(value: string) {
    this._firsTname = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set age(value: number) {
    this._age = value;
  }



  get id(): string {
    return this._id;
  }

  get firsTname(): string {
    return this._firsTname;
  }

  get lastName(): string {
    return this._lastName;
  }

  get age(): number {
    return this._age;
  }
}
