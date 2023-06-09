const avatar = document.getElementsByClassName("avatar");
const containerPerfis = document.getElementById("containerPerfis");
const criançaVacina = document.getElementById("criançaVacina");
const adolescenteVacina = document.getElementById("adolescenteVacina");
const adultoVacina = document.getElementById("adultoVacina");
const gestanteVacina = document.getElementById("gestanteVacina");
const idosoVacina = document.getElementById("idosoVacina");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
let checkedIds = {};
let uncheckedIds = {};

for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    const id = this.id;
    if (this.checked) {
      checkedIds[id] = true;
      delete uncheckedIds[id];
    } else {
      uncheckedIds[id] = true;
      delete checkedIds[id];
    }

    localStorage.setItem("caixaMarcada", JSON.stringify(checkedIds));
    localStorage.setItem("caixaDesmarcada", JSON.stringify(uncheckedIds));
  });
}

// Recuperar os dados do localStorage ao carregar a página
window.addEventListener("load", function () {
  const checkedStorage = localStorage.getItem("caixaMarcada");
  const uncheckedStorage = localStorage.getItem("caixaDesmarcada");

  checkedIds = checkedStorage ? JSON.parse(checkedStorage) : {};
  uncheckedIds = uncheckedStorage ? JSON.parse(uncheckedStorage) : {};

  for (let checkbox of checkboxes) {
    const id = checkbox.id;
    checkbox.checked = id in checkedIds;
  }
});

for (let elemento of avatar) {
  elemento.addEventListener("click", function () {
    for (let elemento of avatar) {
      elemento.classList.remove("selecionado");
    }
    this.classList.add("selecionado");
    for (let i = 0; i < avatar.length; i++) {
      let elemento = avatar[i];
      if (i === 2 && elemento.classList.contains("selecionado")) {
        criançaVacina.style.display = "none";
        adolescenteVacina.style.display = "none";
        gestanteVacina.style.display = "none";
        idosoVacina.style.display = "none";
        adultoVacina.style.display = "block";
        containerPerfis.style.transform = "translateX(-150px)";
      } else if (i === 1 && elemento.classList.contains("selecionado")) {
        criançaVacina.style.display = "none";
        adolescenteVacina.style.display = "block";
        gestanteVacina.style.display = "none";
        idosoVacina.style.display = "none";
        adultoVacina.style.display = "none";
        containerPerfis.style.transform = "translateX(-30px)";
      } else if (i === 3 && elemento.classList.contains("selecionado")) {
        criançaVacina.style.display = "none";
        adolescenteVacina.style.display = "none";
        gestanteVacina.style.display = "block";
        idosoVacina.style.display = "none";
        adultoVacina.style.display = "none";
        containerPerfis.style.transform = "translateX(-310px)";
      } else if (i === 0 && elemento.classList.contains("selecionado")) {
        criançaVacina.style.display = "block";
        adolescenteVacina.style.display = "none";
        gestanteVacina.style.display = "none";
        idosoVacina.style.display = "none";
        adultoVacina.style.display = "none";
        containerPerfis.style.transform = "translateX(0)";
      } else if (i === 4 && elemento.classList.contains("selecionado")) {
        criançaVacina.style.display = "none";
        adolescenteVacina.style.display = "none";
        gestanteVacina.style.display = "none";
        adultoVacina.style.display = "none";
        idosoVacina.style.display = "block";
      }
    }
  });
}
