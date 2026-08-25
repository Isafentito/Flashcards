const flashcards = [
  {
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500",
    question: "O que são propriedades da luz?",
    answer: `As propriedades da luz são as características que descrevem como a luz se comporta e interage com diferentes materiais.

As principais são:
Reflexão: quando a luz bate em uma superfície e retorna. Ex.: um espelho.
Refração: quando a luz passa de um meio para outro e muda sua direção e velocidade. Ex.: um lápis parece “quebrado” dentro de um copo com água.
Difração: quando a luz contorna obstáculos ou se espalha ao passar por uma abertura pequena.
Dispersão: quando a luz branca se separa em várias cores.
Absorção: quando um material absorve parte da energia da luz, geralmente transformando-a em calor.
Propagação: a luz pode se deslocar pelo espaço; em um meio homogêneo e transparente, ela se propaga em linha reta.`
  }
];
[
  {
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500",
    question: "Qual é este animal?",
    answer: "Um Leão!"
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500",
    question: "Em qual cidade fica este monumento?",
    answer: "Paris"
  }
];

let currentIndex = 0;

const card = document.getElementById("card");
const imgElement = document.getElementById("card-img");
const questionElement = document.getElementById("card-question");
const answerElement = document.getElementById("card-answer");

const prevBtn = document.getElementById("prev-btn");
const flipBtn = document.getElementById("flip-btn");
const nextBtn = document.getElementById("next-btn");

function loadCard() {
 
  card.classList.remove("flipped");

  setTimeout(() => {
    const currentData = flashcards[currentIndex];
    imgElement.src = currentData.image;
    questionElement.textContent = currentData.question;
    answerElement.innerText = currentData.answer;
  }, 150);
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  loadCard();
}

flipBtn.addEventListener("click", flipCard);
prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);

card.addEventListener("click", (event) => {

  if (event.target.tagName !== "BUTTON") {
    flipCard();
  }
});

loadCard();