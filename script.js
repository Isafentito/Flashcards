
const flashcardsData = [
  {
    title: "Propriedades da luz:";
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80";
    description: "As propriedades da luz são as características que descrevem como a luz se comporta e interage com diferentes materiais.";
    example: "Reflexão: `luz batendo no espelho e voltando.``Refração: um lápis parece torto dentro da água.``Difração: luz se espalhando ao passar por uma pequena abertura.`"
  };
  {
    title: "Reflexão e espelhos:",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "É quando a luz bate em uma superfície e retorna; Espelhos: são superfícies que refletem a luz e formam imagens.";
    example: "Ex: luz refletida em um espelho; Ex.: espelho de banheiro."
  };
  {
    title: "Fenômenos da luz:",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80";
    description: "São os efeitos que acontecem quando a luz interage com objetos ou materiais.";
    example: "Ex: arco-íris";
  };
  {
    title: "Òptica do corpo humano:";
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80";
    description: "Estuda como a luz entra e forma imagens no olho";
    example: "Padrões coloridos brilhantes visíveis no verso de um disco de CD ou DVD."
  },
  {
    title: "Lentes:";
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80";
    description: "São objetos transparentes que desviam a luz para formar ou modificar imagens.";
    example: "O cristalino funciona como uma lente e ajuda a formar a imagem na retina."
  }
];

const flashcard = document.getElementById("flashcard");
const cardImg = document.getElementById("card-img");
const cardTitleFront = document.getElementById("card-title-front");
const cardDesc = document.getElementById("card-desc");
const cardExample = document.getElementById("card-example");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const cardCounter = document.getElementById("card-counter");
const dotsContainer = document.getElementById("dots-container");

let currentIndex = 0;

function init() {
  createDots();
  updateCard();

  flashcard.addEventListener("click", flipCard);
  btnPrev.addEventListener("click", prevCard);
  btnNext.addEventListener("click", nextCard);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowLeft") {
      prevCard();
    } else if (e.code === "ArrowRight") {
      nextCard();
    }
  });
}

function flipCard() {
  flashcard.classList.toggle("flipped");
}

function updateCard() {

  flashcard.classList.remove("flipped");

  setTimeout(() => {
    const item = flashcardsData[currentIndex];

    cardTitleFront.textContent = item.title;
    cardImg.src = item.image;
    cardImg.alt = item.title;
    cardDesc.textContent = item.description;
    cardExample.textContent = item.example;

    cardCounter.textContent = `${currentIndex + 1} / ${flashcardsData.length}`;

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === flashcardsData.length - 1;

    updateDots();
  }, 150);
}

function createDots() {
  dotsContainer.innerHTML = "";
  flashcardsData.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCard();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard();
  }
}

function nextCard() {
  if (currentIndex < flashcardsData.length - 1) {
    currentIndex++;
    updateCard();
  }
}
init();