class MediaFactory {
  constructor(media) {
    if (media.hasOwnProperty("image")) {
      return new Image(media);
    }
    if (media.hasOwnProperty("video")) {
      return new Video(media);
    }
    return null;
  }
}

class Image {
  constructor(media) {
    this.imageUrl = media.image;
    this.title = media.title;
    this.photographerId = media.photographerId;
    this.id = media.id;
    this.likes = media.likes;
    this.date = media.date
    this.price = media.price
  }
  createHTML() {
    const image = document.createElement("img");
    image.setAttribute("src", `assets/medias/${this.imageUrl}`);
    image.setAttribute("alt", `${this.title}`);
    return image;
  }
}

class Video {
  constructor(media) {
    this.videoUrl = media.video;
    this.title = media.title;
    this.photographerId = media.photographerId;
    this.id = media.id;
    this.likes = media.likes;
    this.date = media.date
    this.price = media.price
  }
  createHTML(){
    const video = document.createElement("video");
    video.removeAttribute("controls");
    const source = document.createElement("source");
    source.setAttribute("src", `assets/medias/${this.videoUrl}`);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    return video;
  }
}