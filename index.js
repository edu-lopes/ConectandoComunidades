let newIndex = 1;

const newsContent = [
  {
    imgSrc: "images/CAMPANHA-DO-AGASALHO-1-2.jpg",
    newP1: "Com a chegada do inverno, muitos enfrentam o frio sem ter acesso a um agasalho adequado. É hora de agirmos juntos e fazer a diferença! A Campanha do Agasalho começa a partir do dia 23/01/2023 nesta terça-feira, com o objetivo de arrecadar agasalhos para aqueles que mais precisam.",
    newP2: "Enquanto nos preparamos para enfrentar as baixas temperaturas do inverno, é crucial lembrar daqueles que não têm o conforto de um agasalho adequado. A campanha visa não apenas fornecer calor físico, mas também aquecer os corações daqueles em situação de vulnerabilidade.",
  },
  {
    imgSrc: "images/ufpb-ajuda-bahia.jpeg",
    newP1: "A cidade de Xique-Xique, na Bahia, enfrenta momentos desafiadores devido às fortes chuvas que resultaram em uma enchente significativa. Ruas estão alagadas, casas foram afetadas, e a população está em alerta máximo.",
    newP2: "Voluntários se mobilizam para prestar auxílio às famílias desalojadas, distribuindo alimentos, roupas e fornecendo suporte emocional. As histórias de generosidade e compaixão inspiram a todos, mostrando que, em momentos difíceis, a verdadeira essência da comunidade se revela.",
  },
  {
    imgSrc: "images/Conectando Coms. (1).png",
    newP1: "Estamos entusiasmados em anunciar um novo capítulo para o projeto Conectando Comunidades. Com o objetivo de estreitar laços e expandir nosso impacto positivo, lançamos um site dedicado para fortalecer nossa presença online e facilitar a interação com comunidades ao redor do Brasil.",
    newP2: "Ao lançar este site, buscamos criar uma plataforma interativa e acessível, onde a comunidade global pode se envolver, inspirar e ser inspirada. Queremos transformar a solidariedade em uma experiência colaborativa e conectada.",
  },
];

function changeNew() {
  const newImage = document.getElementById(`new-image`);
  const currentImage = document.getElementById(`current-image`);
  const currentP1 = document.getElementById("new-p1");
  const currentP2 = document.getElementById("new-p2");
  const btn = document.getElementById("news-next-btn");

  btn.disabled = true;

  if (newIndex === 0) {
    currentImage.src = newsContent[newsContent.length - 1].imgSrc;
  } else {
    currentImage.src = newsContent[newIndex - 1].imgSrc;
  }
  newImage.src = newsContent[newIndex].imgSrc;
  newImage.classList.add("news__content-img--in");
  currentImage.classList.add("news__content-img--out");
  currentP1.classList.add("paragraph-animation");
  currentP2.classList.add("paragraph-animation");
  currentP1.innerHTML = newsContent[newIndex].newP1;
  currentP2.innerHTML = newsContent[newIndex].newP2;
  setTimeout(() => {
    newImage.classList.remove("news__content-img--in");
    currentImage.classList.remove1("news__content-img--out");
    currentP1.classList.remove("paragraph-animation");
    currentP2.classList.remove("paragraph-animation");
  }, 2000);

  setTimeout(() => {
    currentP1.classList.remove("paragraph-animation");
    currentP2.classList.remove("paragraph-animation");
    btn.disabled = false;
    if (newsContent.length <= newIndex + 1) {
      newIndex = 0;
      return;
    }

    newIndex = newIndex + 1;
  }, 3000);
}

function startImage() {
  const newImage = document.getElementById(`new-image`);
  const currentImage = document.getElementById(`current-image`);
  newImage.classList.add("news__content-img--init");
  currentImage.style.display = "none";
  setTimeout(() => {
    newImage.classList.remove("news__content-img--init");
    currentImage.style.display = "flex";
  }, 2000);
}

startImage();
