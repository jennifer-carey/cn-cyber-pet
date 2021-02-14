// create animal template

class Animal {
   constructor(name) {
      this._name = name;
   }
   get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   feed() {
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
   constructor(name) {
      super(name)
   }
}

class Cat extends Animal {
   constructor(name) {
      super(name)
   }
}

class Rabbit extends Animal {
   constructor(name) {
      super(name)
   }
}
