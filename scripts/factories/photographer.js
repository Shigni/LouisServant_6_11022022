function photographerFactory(data) {
    const { name, portrait, id } = data;
  
    const picture = `assets/photographers/${portrait}`;
    const altPicture = `${name}`;
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      const a = document.createElement("a");
      a.setAttribute("href", `./photographer.html?id=${id}`);
      a.setAttribute("role", "link");
      a.setAttribute("aria-label", name);
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("alt", altPicture);
      const h2 = document.createElement("h2");
      h2.textContent = name;
      a.appendChild(img);
      a.appendChild(h2);
      article.appendChild(a);
      return article;
    }
  
    function getPhotographerPageHeader() {
      const photographerHeader = document.querySelector(".photograph-header");
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("alt", altPicture);
      const h2 = document.createElement("h2");
      const divImg = document.createElement("div");
      const divText = document.createElement("div");
      divImg.classList.add("photographer-photo");
      divText.classList.add("photographer-info");
      h2.textContent = name;
      photographerHeader.appendChild(divImg);
      divImg.appendChild(img);
      photographerHeader.appendChild(divText);
      divText.appendChild(h2);
      return photographerHeader;
    }
    return { name, picture, getUserCardDOM, getPhotographerPageHeader };
  }