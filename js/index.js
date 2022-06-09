const elList = document.querySelector(".list");

for (let pokemon of pokemons) {
  //creat element
  const item = document.createElement("li");
  const pokemonImage = document.createElement("img");
  const cardBody = document.createElement("div");
  const titleWrapper = document.createElement("div");
  const title = document.createElement("h5");
  const heartImage = document.createElement("img");
  const typeDesc = document.createElement("p");
  const wrapper = document.createElement("div");
  const weightDesc = document.createElement("h5");
  const avgDesc = document.createElement("h5");

  //set attribute
  item.setAttribute(
    "class",
    "card border border-2 rounded-4 border-dark flex-wrap mb-4"
  );
  item.style.width = "16rem";
  pokemonImage.setAttribute("src", pokemon.img);
  pokemonImage.style.height = "200px";
  cardBody.setAttribute("class", "card-body list__card-body");
  titleWrapper.setAttribute(
    "class",
    "list__wrapper d-flex justify-content-between"
  );
  title.setAttribute("class", "card-title fw-bolder");
  title.textContent = pokemon.name;
  heartImage.setAttribute("src", "./images/heart.svg");
  typeDesc.setAttribute("class", "card-text fw-semibold");
  typeDesc.textContent = pokemon.type;
  wrapper.setAttribute("class", "list__wrapp d-flex");
  weightDesc.setAttribute("class", "card-title fw-bolder");
  weightDesc.textContent = pokemon.weight;
  avgDesc.setAttribute("class", "card-title fw-bolder ms-5");
  avgDesc.textContent = pokemon.avg_spawns;

  //append
  elList.appendChild(item);
  item.appendChild(pokemonImage);
  item.appendChild(cardBody);
  cardBody.appendChild(titleWrapper);
  titleWrapper.appendChild(title);
  titleWrapper.appendChild(heartImage);
  cardBody.appendChild(typeDesc);
  cardBody.appendChild(wrapper);
  wrapper.appendChild(weightDesc);
  wrapper.appendChild(avgDesc);
}

function calcAvg(avg) {
  return pokemons.avg_spawns + 1 - 1;
}
