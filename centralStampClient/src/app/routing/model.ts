/**
 * Created by seif on 6/7/17.
 */
export class Person {
  id;
  name;
  address;
  email;

  constructor(name: string, address: string, email: string, id: number) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.id = id;
  }
}
