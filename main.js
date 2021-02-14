// create animal template

class Animal {
   constructor(name) {
      this._name = name;
      // this._happiness = 0;
   }
   get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   // get happiness() {
   //    return this._happiness;
   // }
   feed() {
      // this._happiness += 20;
      // happinessLevel.textContent = pet.happiness;
      happinessLevel.value += 20;
      petEmotion.textContent = `${pet.name} loves food!`;
   }
   play() {
      happinessLevel.value += 15;
      petEmotion.textContent = `${pet.name} loves playing!`;
   }
   wash() {
      happinessLevel.value -= 25;
      petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
   }
   stroke() {
      happinessLevel.value += 5;
      petEmotion.textContent = `${pet.name} likes cuddles.`;
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
