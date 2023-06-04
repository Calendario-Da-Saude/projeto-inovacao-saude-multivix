const btnCadastro = document.getElementById("cadastro");
const janelaCadastro = document.getElementById("janelaCadastro");
const janelaLogin = document.getElementById("janelaLogin");
const btnCadastrar = document.getElementById("btnCadastrar");
const btnLogin = document.getElementById("login");
const fecharCadastro = document.getElementById("closeCadastro");


btnCadastro.addEventListener("click", function () {
  janelaCadastro.style.display = "block";
});

fecharCadastro.addEventListener("click", function() {
    janelaCadastro.style.display = "none";
});

btnCadastrar.addEventListener("click", function () {
   
});


document.addEventListener("click", function (event) {
    if (!btnCadastro.contains(event.target) && !janelaCadastro.contains(event.target)) {
        janelaCadastro.style.display = "none";
    }
});

btnLogin.addEventListener("click", function () {
  janelaLogin.style.display = "block";
});

btnLogin.addEventListener("click", function() {
    
});

btnLogin.addEventListener("click", function () {
   
});


document.addEventListener("click", function (event) {
    if (!btnLogin.contains(event.target) && !janelaLogin.contains(event.target)) {
        janelaLogin.style.display = "none";
    }
});
