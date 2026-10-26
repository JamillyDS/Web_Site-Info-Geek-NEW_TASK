const hero = document.getElementById("hero");

const dadosDoHero = [
    {
        img: "./images/hollowK.jpg",
        title: "Hollow Knight",
        text: "Hollow Knight é um jogo indie de gênero metroidvania desenvolvido e publicado pela Team Cherry, lançado para Microsoft Windows, macOS e Linux em 2017 e, posteriormente, para Nintendo Switch, Playstation 4 e Xbox One em 2018.",
    },
    {
        img: "./images/celeste.jpg",
        title: "Celeste",
        text: "Celeste é um jogo eletrônico de plataforma desenvolvido pelos canadenses Maddy Thorson e Noel Berry, com arte feita pelo estúdio brasileiro MiniBoss. O jogo foi originalmente criado como um protótipo de quatro dias durante uma game jam, e depois foi expandido para o seu lançamento completo.",
    },
    {
        img: "./images/moonLeap.jpg",
        title: "MoonLeap",
        text: "Explore um mundo cheio de mistérios que se transformam a cada salto! Moonleap é um jogo sobre um menino da lua em sua jornada para recuperar estrelas cadentes. Transforme o dia em noite com seu salto e pegue todas as estrelas neste desafiador jogo de plataforma e quebra-cabeça!",
    },
    {
        img: "./images/meatBoy.jpg",
        title: "Super Meat Boy",
        text: "Super Meat Boy é um jogo eletrônico independente projetado por Edmund McMillen e Tommy Refenes, desenvolvido pela Team Meat. Ele é o sucessor do jogo Flash Meat Boy, criado por McMillen e Jonathan McEntee em 2008.",
    },
    {
        img: "./images/zeldaMask.jpg",
        title: "The Legend of Zelda: Majora’s Mask",
        text: "The Legend of Zelda: Majora's Mask é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo para o console Nintendo 64.",
    },
    {
        img: "./images/bayoneta.jpg",
        title: "Bayonetta",
        text: "Bayonetta é um jogo eletrônico de ação e aventura e hack and slash desenvolvido pela PlatinumGames e publicado pela Sega. Ele foi lançado para PlayStation 3 e Xbox 360 no Japão em outubro de 2009, e na América do Norte e Europa em janeiro de 2010.",
    }
];

let indice = 0;

const newImage = document.createElement("img");
const newText = document.createElement("h1");
const paragrafo = document.createElement("p");

newImage.src = dadosDoHero[indice].img;
newText.textContent = dadosDoHero[indice].title;
paragrafo.textContent = dadosDoHero[indice].text;

hero.appendChild(newImage);
hero.appendChild(newText);
hero.appendChild(paragrafo);

hero.addEventListener("click", () => {
    indice = (indice + 1) % dadosDoHero.length;

    newImage.src = dadosDoHero[indice].img;
    newText.textContent = dadosDoHero[indice].title;
    paragrafo.textContent = dadosDoHero[indice].text;
});