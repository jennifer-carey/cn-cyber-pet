// create animal template

class Animal {
   constructor(name) {
      this._name = name;
   }
   get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   feed() {
      //print to DOM
      console.log(`${this.name} loves feeding time!`);
      // increase happiness level
      return this.happiness += 20;
   }
   play() {
      //print to DOM
      console.log(`${this.name} loves playing!`);
      // increase happiness level
      return this.happiness += 15;
   }
   wash() {
      //print to DOM
      console.log(`Uh-oh! ${this.name} hates bath time.`);
      // increase happiness level
      return this.happiness -= 15;
   }
   stroke() {
      //print to DOM
      console.log(`${this.name} loves cuddles!`);
      // increase happiness level
      return this.happiness += 5;
   }
}

class Dog extends Animal {
   constructor(name, happiness) {
      super(name)
      this._happiness = 10;
   }
   get happiness() {
      return `${this._happiness} tail wags per minute`;
   }
}

class Cat extends Animal {
   constructor(name, happiness) {
      super(name)
      this._happiness = 0;
   }
   get happiness() {
      return `${this._happiness} purrs per minute`;
   }
}

class Rabbit extends Animal {
   constructor(name, happiness) {
      super(name)
      this._happiness = 3;
   }
   get happiness() {
      return `${this._happiness} hops per minute`
   }
}

// let dog1 = new Dog("Rex", 10);
// console.log(`My pet is called ${dog1.name}. Their happiness is: ${dog1.happinessUnit}.`);
// console.log(dog1.play());