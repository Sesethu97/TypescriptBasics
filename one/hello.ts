class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Primate extends Animal {
  constructor(name: string) {
    super(name);
  }
}

class Human extends Primate {
  constructor() {
    super("Human");
  }
}

const primate: Human = new Human();
console.log(primate.getName());
