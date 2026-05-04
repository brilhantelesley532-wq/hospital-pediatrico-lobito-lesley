function show(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function mostrarSenha() {
  var campoSenha = document.getElementById("senha");
  if (campoSenha.type === "password") {
    campoSenha.type = "text";
  } else {
    campoSenha.type = "password";
  }
}

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if( (usuario === "933591367" || usuario === "carlosbraga532@gmail.com") && senha === "Angola12" ){
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudo-principal").style.display = "block";
  } else {
    alert("Utilizador ou senha incorretos!");
  }
});

function abrirPainel(painel) {
  document.getElementById("painelLogin").style.display = "none";
  document.getElementById("painelEsqueceu").style.display = "none";
  document.getElementById("painelCriar").style.display = "none";
  
  if(painel == 'login') {
    document.getElementById("painelLogin").style.display = "block";
  } else if(painel == 'esqueceu') {
    document.getElementById("painelEsqueceu").style.display = "block";
    document.getElementById("msgEnviado").style.display = "none";
  } else if(painel == 'criar') {
    document.getElementById("painelCriar").style.display = "block";
  }
}

function enviarRecuperacao() {
  document.getElementById("msgEnviado").style.display = "block";
}

function validarConta() {
  var nome = document.getElementById("nomeNovo").value;
  var email = document.getElementById("emailNovo").value;
  var numero = document.getElementById("numNovo").value;
  var data = document.getElementById("dataNovo").value;

  if(nome === "Lesley Brilhante" && 
     email === "brilhantelesley532@gmail.com" && 
     numero === "933591367" && 
     data === "14/05/2004") {
     
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("conteudo-principal").style.display = "block";
  } else {
    alert("Ops, tenta de novo ou verifique sua internet.");
  }
}

function sair() {
  document.getElementById("telaLogin").style.display = "flex";
  document.getElementById("conteudo-principal").style.display = "none";
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
}
