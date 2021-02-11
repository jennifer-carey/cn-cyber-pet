// create animal template

class Animal {
   constructor(name, happiness) {
      this.name = name;
      this.happiness = happiness;
   }
   feed() {
      //print to DOM
      console.log(`${this.name} loves feeding time!`);
      // increase happiness level
      this.happiness += 20;
   }
   play() {
      //print to DOM
      console.log(`${this.name} loves playing!`);
      // increase happiness level
      this.happiness += 15;
   }
   wash() {
      //print to DOM
      console.log(`Uh-oh! ${this.name} hates bath time.`);
      // increase happiness level
      this.happiness -= 15;
   }
   stroke() {
      //print to DOM
      console.log(`${this.name} loves cuddles!`);
      // increase happiness level
      this.happiness += 5;
   }
}

class Dog extends Animal {
   constructor(name, happiness) {
      super(name, happiness)
   }
   get happinessUnit(this.happiness) {
      return `${this.happiness} tail wags per minute`;
   }
}

class Cat extends Animal {
   constructor(name, happiness) {
      super(name, happiness)
   }
   get happinessUnit(this.happiness) {
      return `${this.happiness} purrs per minute`;
   }
}

class Rabbit extends Animal {
   constructor(name, happiness) {
      super(name,happiness)
   }
   get happinessUnit(this.happiness) {
      return `${this.happiness} hops per minute`
   }
}