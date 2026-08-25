
const flashcardsData = [
  {
    title: "1. Reflexão da Luz",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    description: "É o fenômeno em que a luz atinge uma superfície e retorna ao meio de onde veio sem mudar de meio de propagação.",
    example: "Ver a própria imagem refletida em um espelho plano ou na superfície tranquila da água."
  },
  {
    title: "2. Refração da Luz",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "Ocorre quando a luz passa de um meio transparente para outro, alterando sua velocidade de propagação e sua direção.",
    example: "Um canudo dentro de um copo com água parece estar quebrado ou torto."
  },
  {
    title: "3. Absorção da Luz",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    description: "Processo no qual a energia da luz incidente é retida pela matéria e transformada em outra energia (como o calor).",
    example: "Usar roupas pretas em um dia ensolarado faz você sentir mais calor do que usar roupas brancas."
  },
  {
    title: "4. Difração da Luz",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    description: "É a capacidade da onda luminosa de contornar obstáculos ou se espalhar ao passar por fendas de tamanho muito pequeno.",
    example: "Padrões coloridos brilhantes visíveis no verso de um disco de CD ou DVD."
  },
  {
    title: "5. Dispersão da Luz",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
    description: "Separação da luz policromática (luz branca) em suas diversas cores componentes ao atravessar um meio como um prisma.",
    example: "A formação do Arco-Íris no céu quando a luz do sol atravessa as gotículas de chuva."
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