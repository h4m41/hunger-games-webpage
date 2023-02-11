const cards = document.querySelector(".cards");

const actors = [
  {
    image: "images/jeniffer.jpg",
    name: "Jeniffer Lawrence",
    character: "Katniss Everdeen",
  },
  {
    image: "images/josh.webp",
    name: "Josh Hutherson",
    character: "Peeta Mellark",
  },
  {
    image: "images/liam.webp",
    name: "Liam Hemsworth",
    character: "Gale Hawthorne",
  },
  {
    image: "images/woody.webp",
    name: "Woody Harrelson",
    character: "Haymitch Abernathy",
  },
];

function actorList() {
  actors.forEach(function (actor) {
    const card = document.createElement("div");
    const cardImageHolder = document.createElement("div");
    const actorImage = document.createElement("img");
    const actorName = document.createElement("p");
    const characterName = document.createElement("p");

    card.classList.add("card");
    cardImageHolder.classList.add("card-image-holder");
    actorImage.classList.add("actor-image");
    actorName.classList.add("actor-name");
    characterName.classList.add("character-name");

    actorImage.src = actor.image;
    actorName.innerText = actor.name;
    characterName.innerText = actor.character;

    cardImageHolder.appendChild(actorImage);
    card.appendChild(cardImageHolder);
    card.appendChild(actorName);
    card.appendChild(characterName);
    cards.appendChild(card);
  });
}
actorList();
