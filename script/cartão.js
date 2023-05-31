const avatar = document.getElementsByClassName("avatar");
const containerPerfis = document.getElementById("containerPerfis");

for (let elemento of avatar) {
    elemento.addEventListener("click", function() {
        for (let elemento of avatar) {
            elemento.classList.remove("selecionado");
        }
        this.classList.add("selecionado");
        for (let i = 0; i < avatar.length; i++) {
            let elemento = avatar[i];
            if (i === 2 && elemento.classList.contains("selecionado")) {
                containerPerfis.style.transform = "translateX(-150px)"
            } else if (i === 1 && elemento.classList.contains("selecionado")) {
                containerPerfis.style.transform = "translateX(-30px)"
            } else if (i === 3 && elemento.classList.contains("selecionado")) {
                containerPerfis.style.transform = "translateX(-310px)"
            } else if (i === 0 && elemento.classList.contains("selecionado")) {
                containerPerfis.style.transform = "translateX(0)"
            }
        }
    })
}