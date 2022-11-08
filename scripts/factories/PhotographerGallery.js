function photographersGalleryType() {
  photo.forEach((img) => {
    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      console.log(img);
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );
      pPortfolio.appendChild(pPicture);
    } else {
      const video = document.createElement("video");
      const sourceVideo = document.createElement("source");

      sourceVideo.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.video}`
      );
      sourceVideo.setAttribute("type", "video/mp4");
      video.setAttribute("width", "300px");
      video.setAttribute("autoplay", true);
      video.appendChild(sourceVideo);
      pPortfolio.appendChild(video);
    }
  });
}

export function photographersGalleryType(media) {}
