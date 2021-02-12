// elements the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const rabbitImg = document.querySelector("#rabbit-img");
// elements of interface
const welcomeScreen = document.querySelector("#welcome-screen");
const petInterface = document.querySelector("#pet-interface");
const insertName = document.querySelector("#insert-name");
const happinessLevel = document.querySelector("#happiness-level");
// action buttons
const feedBtn = document.querySelector("#feed-button");
const playBtn = document.querySelector("#play-button");
const washBtn = document.querySelector("#wash-button");
const strokeBtn = document.querySelector("#stroke-button");

petInterface.style.display = "none";

dogImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
   let newDog = new Dog(`${petName}`, 10);
   insertName.textContent = newDog.name;
   happinessLevel.textContent = newDog.happiness;
});