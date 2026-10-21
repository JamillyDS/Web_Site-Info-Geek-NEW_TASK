const hero = document.getElementById("hero");

const dadosDoHero = [
    {
        img: "./images/hollowK.jpg",
        text: "Teste",
    },
    {
        img: "./images/celeste.jpg",
        text: "Teste 2",
    },
    {
        img: "./images/moonLeap.jpg",
        text: "Teste 3",
    },
    {
        img: "./images/superCatBros.jpg",
        text: "Teste 4",
    },
    {
        img: "./images/zeldaMask.jpg",
        text: "Teste 5",
    },
    {
        img: "./images/bayoneta.jpg",
        text: "Teste 6",
    }
];

let indice = 0;

const newImage = document.createElement("img");
const newText = document.createElement("h1");

newImage.src = dadosDoHero[indice].img;
newText.textContent = dadosDoHero[indice].text;

hero.appendChild(newImage);
hero.appendChild(newText);

hero.addEventListener("click", () => {
    indice = (indice + 1) % dadosDoHero.length;

    newImage.src = dadosDoHero[indice].img;
    newText.textContent = dadosDoHero[indice].text;
});