const flashcards = [
  {
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500",
    question: "Qual é este animal?",
    answer: "Um Leão!"
  },
  {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500",
    question: "Em qual cidade fica este monumento?",
    answer: "Paris (Torre Eiffel)"
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
    question: "Que tipo de arte visual é essa?",
    answer: "Arte Abstrata 3D"
  }
];

let currentIndex = 0;

const card = document.getElementById("card");
const imgElement = document.getElementById("card-img");
const questionElement = document.getElementById("card-question");
const answerElement = document.getElementById("card-answer");

function loadCard() {
 
  card.classList.remove("flipped");

  setTimeout(() => {
    const currentData = flashcards[currentIndex];
    imgElement.src = currentData.image;
    questionElement.textContent = currentData.question;
    answerElement.textContent = currentData.answer;
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

loadCard();