function initLightbox() {
    const lightbox = document.querySelector(".lightbox");
    const close = document.querySelector(".lightbox-close");
    const previous = lightbox.querySelector(".lightbox-prev");
    const next = lightbox.querySelector(".lightbox-next");
  
    initLightboxLinks();
  
    close.addEventListener("click", function () {
      closeLightbox(lightbox);
    });
    previous.addEventListener("click", function () {
      plusSlides(-1);
    });
    next.addEventListener("click", function () {
      plusSlides(1);
    });
    document.addEventListener("keyup", (event) => {
      if (lightbox.ariaHidden === "false") {
        if (event.key === "Escape") {
          closeLightbox(lightbox);
        } else if (event.key === "ArrowLeft") {
          plusSlides(-1);
        } else if (event.key === "ArrowRight") {
          plusSlides(1);
        }
      }
    });
  
    SlideShow(1);
  }
  
  function initLightboxLinks() {
    const lightbox = document.querySelector(".lightbox");
    const mediaLinks = document.querySelectorAll(".photograph-media a");
    const main = document.getElementById("main");
  
    for (let link of mediaLinks) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        slidePosition = Array.from(mediaLinks).indexOf(link) + 1;
        displaySlide(link);
  
        lightbox.classList.add("show");
        main.setAttribute("aria-hidden", true);
        lightbox.setAttribute("aria-hidden", false);

        getTabbableElements(document).forEach(
          (tabbable) => (tabbable.tabIndex = -1)
        );
        getTabbableElements(lightbox).forEach(
          (tabbable) => (tabbable.tabIndex = 0)
        );
      });
    }
  }
  
  function closeLightbox(lightbox) {
    lightbox.classList.remove("show");
    getTabbableElements(document).forEach((tabbable) => (tabbable.tabIndex = 0));
  }
  
  let slidePosition = 1;
  
  function plusSlides(n) {
    SlideShow((slidePosition += n));
  }
  
  function SlideShow(n) {
    const slides = document.querySelectorAll(".media-image");
    if (n > slides.length) {
      slidePosition = 1;
    } else if (n < 1) {
      slidePosition = slides.length;
    }
    displaySlide(slides[slidePosition - 1]);
  }
  
  function displaySlide(link) {
    const media = document.querySelector(".lightbox-container .media-display");
    const titleMedia = document.querySelector(".lightbox-container .media-title");
  
    media.innerHTML = link.firstElementChild.outerHTML;
    titleMedia.innerHTML = link.nextElementSibling.firstElementChild.outerHTML;
  
    if (media.firstElementChild instanceof HTMLVideoElement) {
      media.firstElementChild.controls = true;
    }
  }