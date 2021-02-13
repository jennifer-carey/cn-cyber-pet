// elements the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const rabbitImg = document.querySelector("#rabbit-img");
// elements of interface
const welcomeScreen = document.querySelector("#welcome-screen");
const petInterface = document.querySelector("#pet-interface");
const petImg = document.querySelector("#pet-img")
const insertName = document.querySelector("#insert-name");
const happinessLevel = document.querySelector("#happiness-level");
const petEmotion = document.querySelector("#pet-emotion");
// action buttons
const feedBtn = document.querySelector("#feed-button");
const playBtn = document.querySelector("#play-button");
const washBtn = document.querySelector("#wash-button");
const strokeBtn = document.querySelector("#stroke-button");

let pet;
let petName;

petInterface.style.display = "none";

// function that asks user for name of pet
const getName = () => {
   petName = prompt("Aw, great choice! Now enter a name for your pet.");
   while (petName.length === 0) {
      alert("Please enter a name for your pet.");
      petName = prompt("Your pet name:");
   }
};

dogImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   // let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
   getName();
   petImg.src = "images/animal-dog.jpg";
   pet = new Dog(petName);
   insertName.textContent = pet.name;
   happinessLevel.textContent = pet.happiness;
   // setInterval(() => {
   //    console.log("game loop");
   // }, 3000);
});

catImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
   petImg.src = "images/animal-cat.jpg";
   pet = new Cat(petName);
   insertName.textContent = pet.name;
   happinessLevel.textContent = pet.happiness;
   // setInterval(() => {
   //    console.log("game loop");
   // }, 3000);
});

rabbitImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
   petImg.src = "images/animal-rabbit.jpg";
   pet = new Rabbit(petName);
   insertName.textContent = pet.name;
   happinessLevel.textContent = pet.happiness;
   // setInterval(() => {
   //    console.log("game loop");
   // }, 3000);
});

feedBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `${pet.name} loves food!`;
   pet.feed();
   happinessLevel.textContent = pet.happiness;
})

playBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `${pet.name} loves playing!`;
   pet.play();
   happinessLevel.textContent = pet.happiness;
})

washBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
   pet.wash();
   happinessLevel.textContent = pet.happiness;
})

strokeBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `${pet.name} loves cuddles!`;
   pet.stroke();
   happinessLevel.textContent = pet.happiness;
})

/// create start again option