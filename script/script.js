const btnCadastro = document.getElementById("cadastro");
const janelaCadastro = document.getElementById("janelaCadastro");
const btnCadastrar = document.getElementById("btnCadastrar");
const fechar = document.getElementById("close");


btnCadastro.addEventListener("click", function () {
  janelaCadastro.style.display = "block";
});

fechar.addEventListener("click", function() {
    janelaCadastro.style.display = "none";
});

btnCadastrar.addEventListener("click", function () {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
});


document.addEventListener("click", function (event) {
    if (!btnCadastro.contains(event.target) && !janelaCadastro.contains(event.target)) {
        janelaCadastro.style.display = "none";
    }
});
