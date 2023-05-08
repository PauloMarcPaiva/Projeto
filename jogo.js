
// Variáveis globais
var personagens = ["Sócrates", "Santo Agostinho", "John Locke", "Karl Marx"];
var personagemSorteado = "";
var tentativasRestantes = 5;

// Função JavaScript para redirecionar
function redirecionar() {
  var nome = document.getElementById("nome").value;
  if (nome.trim() !== "") {
    // Redirecionar para a página com a tabela de personagens
    window.location.href = "personagens.html?nome=" + encodeURIComponent(nome);
  } else {
    alert("Por favor, digite seu nome.");
  }
}

// Função JavaScript para sortear um personagem
function sortearPersonagem() {
  
  var indiceSorteado = Math.floor(Math.random() * personagens.length);
  personagemSorteado = personagens[indiceSorteado];
  document.getElementById("mensagemSorteio").innerText = "Personagem sorteado! Faça suas perguntas para descobrir quem é.";

  // Habilitar a função de pergunta
  document.getElementById("pergunta").disabled = false;
  document.getElementById("pergunta").focus();
  document.getElementById("mensagemPergunta").innerText = "";
  document.getElementById("pergunta").value = "";
  document.getElementById("pergunta").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      verificarPergunta();
    }
  });
  
  document.querySelector("button:nth-of-type(5)").disabled = false;
  
}

function verificarPergunta() {
  var pergunta = document.getElementById("pergunta").value.toLowerCase();
  var mensagem = document.getElementById("mensagemPergunta");

  // Verificar se ainda há tentativas restantes
  if (tentativasRestantes > 0) {
    // Reduzir o número de tentativas restantes
    tentativasRestantes--;

    // Verificar se a pergunta está correta
    if (pergunta === personagemSorteado.toLowerCase()) {
      mensagem.innerText = "Sim, o personagem é " + personagemSorteado + "! Parabéns, você acertou!";
      document.getElementById("pergunta").disabled = true;
      document.querySelector("button:nth-of-type(5)").disabled = true;
    } 
    else if (pergunta === "idade antiga" && personagemSorteado === "Sócrates") {
            mensagem.innerText = "Sim, Sócrates é da idade antiga!"
            document.getElementById("pergunta").value = "";
            document.getElementById("tentativas").innerText = tentativasRestantes;
    }
    else if (pergunta === "catolico" && personagemSorteado === "Santo Agostinho") {
        mensagem.innerText = "Sim, Santo Agostinho é Católico!"
        document.getElementById("pergunta").value = "";
        document.getElementById("tentativas").innerText = tentativasRestantes;
}
else if (pergunta === "liberal" && personagemSorteado === "Jonh Locke") {
    mensagem.innerText = "Sim, Jonh Locke é liberal!"
    document.getElementById("pergunta").value = "";
    document.getElementById("tentativas").innerText = tentativasRestantes;
}
else if (pergunta === "socialista" && personagemSorteado === "Karl Marx") {
    mensagem.innerText = "Sim, Karl Marx é socialista!"
    document.getElementById("pergunta").value = "";
    document.getElementById("tentativas").innerText = tentativasRestantes;
}
    else {
      mensagem.innerText = "Não, o personagem não é " + pergunta + ".";
      document.getElementById("pergunta").value = "";
      document.getElementById("tentativas").innerText = tentativasRestantes;
    }

    // Verificar se o usuário atingiu 0 tentativas e reiniciar o jogo
    if (tentativasRestantes === 0) {
      mensagem.innerText = "Você não tem mais tentativas. O personagem era " + personagemSorteado + ".";
      document.getElementById("pergunta").disabled = true;
      document.querySelector("button:nth-of-type(5)").disabled = true;
      setTimeout(function() {
        sortearPersonagem();
      }, 3000); // reiniciar o jogo após 3 segundos
    }
  }
  else {
    mensagem.innerText = "Você não tem mais tentativas. O personagem era " + personagemSorteado + ".";
    document.getElementById("pergunta").disabled = true;
    document.querySelector("button:nth-of-type(5)").disabled = true;
  }
}

 
// Extrair o nome da URL e exibi-lo
var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
document.getElementById("nome").innerText = nome;

