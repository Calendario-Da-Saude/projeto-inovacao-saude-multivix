const containerVideo = document.getElementsByClassName("containerVideo");
const containerTitulo = document.getElementsByClassName("containerTitulo");
const videos = document.querySelectorAll("video");

for (let elemento of containerTitulo) {
  elemento.addEventListener("click", function () {
    for (let elemento of containerTitulo) {
      if (elemento !== this) {
        let containerVideoPai = this;
        let containerVideoFilho = containerVideoPai.parentNode;
        let video = containerVideoFilho.children[1];

        for (let elemento of videos) {
          elemento.pause();
        }
        video.style.display = "none";
        elemento.classList.remove("clicou");
      }
    }

    let containerVideoPai = this;
    let containerVideoFilho = containerVideoPai.parentNode;
    let video = containerVideoFilho.children[1];

    this.classList.toggle("clicou");

    if (this.classList.contains("clicou")) {
      video.style.display = "block";
    } else {
      for (let elemento of videos) {
        elemento.pause();
      }
      video.style.display = "none";
    }
  });
}

for (let elemento of containerTitulo) {
  elemento.addEventListener("click", function () {
    for (let elemento of containerTitulo) {
      if (elemento !== this) {
        let thisArrow = elemento.children[1];
        let thisArrowPai = thisArrow.parentNode;
        let containerVideo = thisArrowPai.parentNode;
        let video = containerVideo.children[1];
        thisArrow.classList.remove("rotate-90-cw");
        thisArrow.classList.add("rotate-back");
        video.style.display = "none";
      }
    }

    let thisArrow = this.children[1];
    if (thisArrow.classList.contains("rotate-90-cw")) {
      thisArrow.classList.remove("rotate-90-cw");
      thisArrow.classList.add("rotate-back");
    } else {
      thisArrow.classList.remove("rotate-back");
      thisArrow.classList.add("rotate-90-cw");
    }
  });
}
