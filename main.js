// create animal template

class Animal {
   constructor(name) {
      this._name = name;
   }
   get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   feed() {
      this._happiness += 20;
   }
   play() {
      this.happiness += 15;
   }
   wash() {
      this.happiness -= 15;
   }
   stroke() {
      this.happiness += 5;
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
      this._happiness = 1;
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
      return `${this._happiness} hops per minute`;
   }
}
