// elements the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const rabbitImg = document.querySelector("#rabbit-img");

// prompt box triggered when user selects image of any animal
// const petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
// }


dogImg.addEventListener("click", () => {
   let petName = prompt("Aw, great choice! Now enter a name for your pet.", "Your pet ");
   let newDog = new Dog(`${petName}`);
   console.log(newDog.name);
})