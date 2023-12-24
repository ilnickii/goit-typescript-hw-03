interface IKey {
  getSignature: () => number;
}

class Key implements IKey {
  constructor(private signature: number) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: IKey) {}
  getKey(): IKey {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  tenants: Array<Person> = [];
  constructor(protected key: IKey) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(keyObj: IKey): void;
}

class MyHouse extends House {
 
  openDoor(keyObj: IKey): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};