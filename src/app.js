const hero = document.getElementById("hero");

const newImage = document.createElement("img");
const newText = document.createElement("h1");

newText.textContent = "Teste";
newImage.src = "./images/hollowK.jpg";

hero.appendChild(newText);
hero.appendChild(newImage);

hero.addEventListener("click", () => {

    if (newImage.getAttribute("src") === "./images/hollowK.jpg") {
        newImage.src = "./images/celeste.jpg";
        newText.textContent = "Bunda";
    } else {
        newImage.src = "./images/hollowK.jpg";
        newText.textContent = "Teste";
    }
})