const containerVideo = document.getElementsByClassName("containerVideo");
const containerTitulo = document.getElementsByClassName("containerTitulo");

for (let elemento of containerVideo) {
  elemento.addEventListener("click", function() {
    for (let elemento of containerVideo) {
      if (elemento !== this) {
        let video = elemento.children[1];
        video.style.display = "none";
        elemento.classList.remove("clicou");
      }
    }

    let video = this.children[1];
    this.classList.toggle("clicou");

    if (this.classList.contains("clicou")) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
}

for (let elemento of containerTitulo) {
  elemento.addEventListener("click", function() {

    for (let elemento of containerTitulo) {
        if (elemento !== this) {
            let thisArrow = elemento.children[1];
            thisArrow.classList.remove("rotate-90-cw")
            thisArrow.classList.add("rotate-back");
        }
      }

    let thisArrow = this.children[1];
    if (thisArrow.classList.contains("rotate-90-cw")) {
        thisArrow.classList.add("rotate-back")
    } else {
        thisArrow.classList.remove("rotate-back")
    }
    thisArrow.classList.toggle("rotate-90-cw");
  });
}
