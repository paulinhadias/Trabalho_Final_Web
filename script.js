/* Animação Scroll */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("load", revealOnScroll);

window.addEventListener("scroll", revealOnScroll);


/* Navbar */
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.85)";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.099)";
    }
  });
}

// Destaques AJAX
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btn-destaques");
  const conteudo = document.getElementById("destaque-conteudo");

  botao.addEventListener("click", function () {

    conteudo.innerHTML = "<p>Carregando destaques...</p>";

    setTimeout(function () {
      conteudo.innerHTML = `
        <h3>Jogo do Ano</h3>
        <p><b>Expedition 33</b> se destacou pela inovação e qualidade técnica.</p>

        <img src="https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1kt2x.jpg" alt="Expedition 33">

        <p>
          Outros jogos como <b>Death Stranding 2</b> e
          <b>Hollow Knight: Silksong</b> também foram grandes destaques em 2025,
          recebendo elogios da crítica e do público.
        </p>
      `;
    }, 1000);
  });
});


// Formulário de votação
const form = document.getElementById("form-votacao");
const resposta = document.getElementById("resposta-voto");

if (form && resposta) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value;
    const jogo = form.jogo.value;

    resposta.innerHTML = `<p>Obrigado, <b>${nome}</b>! Seu voto em <b>${jogo}</b> foi registrado.</p>`;
    form.reset();
  });
}

