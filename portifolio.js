document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


let ultimoScrollTop = 0;
const cabecalho = document.querySelector(".cabecalho");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > ultimoScrollTop) {
   
    cabecalho.style.transform = "translateY(-100%)";
  } else {
    
    cabecalho.style.transform = "translateY(0)";
  }


  if (scrollTop > 50) {
    cabecalho.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    cabecalho.style.background = "rgba(15, 23, 42, 0.9)";
  }

  ultimoScrollTop = scrollTop;
});

const observerOpcoes = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.style.opacity = "1";
      entrada.target.style.transform = "translateY(0)";
    }
  });
}, observerOpcoes);

document.querySelectorAll(".card-habilidade, .card-projeto").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

window.addEventListener("scroll", () => {
  const rolado = window.pageYOffset;
  const formas = document.querySelectorAll(".forma");

  formas.forEach((forma, indice) => {
    const velocidade = (indice + 1) * 0.5;
    forma.style.transform = `translateY(${rolado * velocidade}px)`;
  });
});

document.querySelectorAll(".botao-cta, .item-contato").forEach((botao) => {
  botao.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.05)";
  });

  botao.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

const cursor = document.createElement("div");
cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0.5;
        `;
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
});

if (window.innerWidth <= 768) {
  cursor.style.display = "none";
}

const projetos = [
  {
    img: "./img/secret-word.png",
    titulo: "Secret Word",
    descricao: "Jogo de adivinhação de palavras desenvolvido em React, com gerenciamento de estados e interatividade dinâmica.",
    tecnologias: ["React", "CSS", "JavaScript"],
    vercel: "https://secret-word-roan.vercel.app",
    github: "https://github.com/wallessonf/SecretWord"
  },
  {
    img: "./img/jogo-da-memoria.png",
    titulo: "Jogo da Memória",
    descricao: "Jogo da memória com cartas interativas, desenvolvido em React com manipulação de estados e lógica de embaralhamento.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    vercel: "https://jogo-da-memoria-sand-rho.vercel.app",
    github: "https://github.com/wallessonf/jogo-da-memoria/"
  },
  {
    img: "./img/miniblog.png",
    titulo: "MiniBlog",
    descricao: "Plataforma de postagens desenvolvida em React, com autenticação, CRUD de posts e design responsivo.",
    tecnologias: ["React", "CSS", "Firebase"],
    vercel: "https://miniblog-plum.vercel.app",
    github: "https://github.com/wallessonf/miniblog"
  }
];

const grid = document.getElementById("grid-projetos");

grid.innerHTML = ""; 

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card-projeto");

  card.innerHTML = `
    <div class="imagem-projeto">
      <img src="${projeto.img}" alt="${projeto.titulo}" />
    </div>
    <div class="conteudo-projeto">
      <h3 class="titulo-projeto">${projeto.titulo}</h3>
      <p class="descricao-projeto">${projeto.descricao}</p>
      <div class="tecnologias-projeto">
        ${projeto.tecnologias.map(tech => `<span class="tag-tecnologia">${tech}</span>`).join("")}
      </div>
      <div class="links-projeto">
        <a href="${projeto.vercel}" target="_blank" class="botao-projeto">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
          Ver Projeto
        </a>
        <a href="${projeto.github}" target="_blank" class="botao-projeto">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.55v-2.1c-3.2.7-3.8-1.55-3.8-1.55-.5-1.2-1.2-1.55-1.2-1.55-1-.65.1-.65.1-.65 1.1.1 1.7 1.15 1.7 1.15.95 1.7 2.5 1.2 3.1.95.1-.7.4-1.2.7-1.45-2.55-.3-5.25-1.3-5.25-5.85 0-1.3.45-2.35 1.15-3.2-.15-.3-.5-1.5.1-3.1 0 0 .95-.3 3.15 1.2.95-.25 1.95-.35 2.95-.35 1 0 2 .1 2.95.35 2.2-1.5 3.15-1.2 3.15-1.2.6 1.6.25 2.8.1 3.1.7.85 1.15 1.9 1.15 3.2 0 4.55-2.7 5.55-5.25 5.85.4.35.75 1 .75 2.05v3.05c0 .3.2.65.8.55C20.7 21.4 24 17.1 24 12c0-6.35-5.15-11.5-12-11.5z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});