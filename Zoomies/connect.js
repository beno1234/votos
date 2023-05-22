// Função para enviar o voto para o back-end
function votar(id) {
  fetch(`http://localhost:3000/votar/${id}`, { method: "POST" })
    .then((response) => {
      if (response.ok) {
        console.log("Voto registrado com sucesso!");
      } else {
        console.error("Erro ao registrar o voto.");
      }
    })
    .catch((error) => {
      console.error("Erro ao registrar o voto:", error);
    });
}

// Função para carregar a contagem de votos do back-end
function carregarContagem() {
  fetch("http://localhost:3000/contagem")
    .then((response) => response.json())
    .then((data) => {
      // Atualizar o HTML com a contagem de votos
      data.forEach((item) => {
        const card = document.querySelector(`#${item.id}`);
        if (card) {
          card.querySelector(".votos").textContent = item.votos;
        }
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar a contagem de votos:", error);
    });
}

// Adicionar o evento de clique aos botões de voto
const botoesVoto = document.querySelectorAll(".red-button");
botoesVoto.forEach((botao) => {
  botao.addEventListener("click", () => {
    const id = botao.getAttribute("data-id");
    votar(id);
  });
});

// Carregar a contagem de votos ao carregar a página
carregarContagem();
