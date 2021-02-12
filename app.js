// elements the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const rabbitImg = document.querySelector("#rabbit-img");
// elements of interface
const welcomeScreen = document.querySelector("#welcome-screen");
const petInterface = document.querySelector("#pet-interface");
const insertName = document.querySelector("#insert-name");
const happinessLevel = document.querySelector("#happiness-level");
const petEmotion = document.querySelector("#pet-emotion");
// action buttons
const feedBtn = document.querySelector("#feed-button");
const playBtn = document.querySelector("#play-button");
const washBtn = document.querySelector("#wash-button");
const strokeBtn = document.querySelector("#stroke-button");

let pet;

petInterface.style.display = "none";

dogImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
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
})

playBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `${pet.name} loves playing!`;
   pet.play();
})

washBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
   pet.wash();
})

strokeBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   petEmotion.textContent = `${pet.name} loves cuddles!`;
   pet.stroke();
})

/// create start again option