function photographerFactory(data) {
  const { name, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }
  return { name, picture, getUserCardDOM };
}


// Carrousel

document.body.onload=function(){
  nbr=9;
  p=0;
  const container = document.getElementById("#container");
  const g = document.getElementById("#g");
  const d = document.getElementById("#d");

  container.style.width=(800*nbr)+"px";

  for(i=1;i<=nbr;i++){
    div=document.createElement("div");
    div.className="photo";
    div.style.backgroundImage"url(./assets/Portfolio/195/Architecture_Corner_Room.jpg)";
  }


}