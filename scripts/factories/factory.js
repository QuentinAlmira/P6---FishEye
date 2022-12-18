if (img.image !== undefined) {
  const pPicture = document.createElement("img");
  pPicture.setAttribute(
    "src",
    `./assets/Portfolio/${img.photographerId}/${img.image}`
  );
  pPicture.setAttribute("alt", `${img.description}`);
  pictureCardContent.appendChild(pPicture);
} else {
  const video = document.createElement("video");
  const sourceVideo = document.createElement("source");

  sourceVideo.setAttribute(
    "src",
    `./assets/Portfolio/${img.photographerId}/${img.video}`
  );
  sourceVideo.setAttribute("type", "video/mp4");
  video.setAttribute("width", "300px");
  video.setAttribute("height", "100%");
  video.setAttribute("autoplay", true);
  video.setAttribute("loop", true);
  video.appendChild(sourceVideo);
  pictureCardContent.appendChild(video);
}
