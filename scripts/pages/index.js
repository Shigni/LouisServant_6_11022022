async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  return await response.json();
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const { city, country, tagline, price } = photographer;
    p.textContent = `${city}, ${country}`;
    p.classList.add("photographer-location");
    p2.textContent = tagline;
    p2.classList.add("photographer-tagline");
    p3.textContent = `${price}€/jour`;
    p3.classList.add("photographer-price");
    userCardDOM.appendChild(p);
    userCardDOM.appendChild(p2);
    userCardDOM.appendChild(p3);
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();