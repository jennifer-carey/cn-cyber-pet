// create animal template

class Animal {
   constructor(name) {
      this._name = name;
      this._happiness = 0;
   }
   get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   get happiness() {
      return this._happiness;
   }
   feed() {
      this._happiness += 20;
      happinessLevel.textContent = pet.happiness;
      petEmotion.textContent = `${pet.name} loves food!`;
   }
   play() {
      this._happiness += 15;
      happinessLevel.textContent = pet.happiness;
      petEmotion.textContent = `${pet.name} loves playing!`;
   }
   wash() {
      this._happiness -= 15;
      happinessLevel.textContent = pet.happiness;
      petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
   }
   stroke() {
      this._happiness += 5;
      happinessLevel.textContent = pet.happiness;
      petEmotion.textContent = `${pet.name} loves cuddles!`;
   }
}

class Dog extends Animal {
   constructor(name, happiness) {
      super(name, happiness)
   }
   get happiness() {
      return `${this._happiness} tail wags per minute`;
   }
}

class Cat extends Animal {
   constructor(name, happiness) {
      super(name, happiness)
   }
   get happiness() {
      return `${this._happiness} purrs per minute`;
   }
}

class Rabbit extends Animal {
   constructor(name, happiness) {
      super(name, happiness)
   }
   get happiness() {
      return `${this._happiness} hops per minute`;
   }
}
