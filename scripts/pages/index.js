let tab = [];
//Récupération datas
const fetchPhotographers = async () => {
  await fetch('data/photographers.json')
    .then((res) => res.json())
    .then((data) => {
      tab = data.photographers;
    });
};
async function getPhotographers() {
  await fetchPhotographers();
  const photographers = tab;
  return { photographers: [...photographers] };
}
//  Display datas
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// Init
async function init() {
  // get datas photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
