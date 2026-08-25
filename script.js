// Banco de dados dos flashcards
const bancoDeCartas = [
    // 1. Propriedades da luz
    { tema: 'propriedades', img: 'https://placehold.co/400x200/f39c12/white?text=Onda+Eletromagnetica', p: 'O que é a luz?', r: 'É uma onda eletromagnética transversal que pode se propagar no vácuo.' },
    { tema: 'propriedades', img: 'https://placehold.co/400x200/f39c12/white?text=Velocidade', p: 'Qual é a velocidade da luz no vácuo?', r: 'Aproximadamente 300.000 km/s (ou 3 x 10^8 m/s).' },
    
    // 2. Reflexão e espelhos
    { tema: 'reflexao', img: 'https://placehold.co/400x200/3498db/white?text=Leis+da+Reflexao', p: 'O que diz a 2ª Lei da Reflexão?', r: 'O ângulo de incidência é sempre igual ao ângulo de reflexão.' },
    { tema: 'reflexao', img: 'https://placehold.co/400x200/3498db/white?text=Espelho+Plano', p: 'Quais são as características da imagem em um espelho plano?', r: 'Virtual, direita, do mesmo tamanho do objeto e enantiomorfa (invertida lateralmente).' },
    
    // 3. Fenômenos da luz
    { tema: 'fenomenos', img: 'https://placehold.co/400x200/9b59b6/white?text=Refracao', p: 'O que é a refração da luz?', r: 'É a mudança na velocidade (e geralmente na direção) da luz quando ela passa de um meio para outro diferente.' },
    { tema: 'fenomenos', img: 'https://placehold.co/400x200/9b59b6/white?text=Dispersao', p: 'O que causa a formação do arco-íris?', r: 'A dispersão e a refração da luz branca do sol ao passar pelas gotas de água na atmosfera.' },
    
    // 4. Lentes
    { tema: 'lentes', img: 'https://placehold.co/400x200/2ecc71/white?text=Lente+Convergente', p: 'Como se comporta uma lente convergente?', r: 'Ela faz com que os raios de luz paralelos que passam por ela se cruzem em um único ponto (foco).' },
    { tema: 'lentes', img: 'https://placehold.co/400x200/2ecc71/white?text=Lupa', p: 'Que tipo de lente é usada em uma lupa?', r: 'Uma lente convergente, que forma uma imagem virtual, direita e maior do objeto.' },
    
    // 5. Óptica do corpo humano
    { tema: 'optica_corpo', img: 'https://placehold.co/400x200/e74c3c/white?text=Miopia', p: 'Qual problema de visão é corrigido com lentes divergentes?', r: 'A miopia, pois a imagem se forma antes da retina.' },
    { tema: 'optica_corpo', img: 'https://placehold.co/400x200/e74c3c/white?text=Cristalino', p: 'Qual estrutura do olho funciona como uma lente biconvexa natural?', r: 'O cristalino, que foca os raios de luz na retina.' }
];

let cartasAtuais = [];
let indiceAtual = 0;

// Função para filtrar e carregar as cartas do tema escolhido
function carregarTema(temaSelecionado) {
    cartasAtuais = bancoDeCartas.filter(carta => carta.tema === temaSelecionado);
    indiceAtual = 0;
    
    // Mostra a área do flashcard
    document.querySelector('.flashcard-container').style.display = 'flex';
    
    // Garante que o card comece virado para a pergunta
    document.getElementById('flashcard').classList.remove('virado');
    
    atualizarCard();
}

// Preenche o HTML do card com os dados da carta atual
function atualizarCard() {
    if (cartasAtuais.length === 0) return;

    const carta = cartasAtuais[indiceAtual];
    
    document.getElementById('card-image').src = carta.img;
    document.getElementById('card-question').innerText = carta.p;
    document.getElementById('card-answer').innerText = carta.r;
    
    document.getElementById('card-counter').innerText = `${indiceAtual + 1} / ${cartasAtuais.length}`;
}

// Vira a carta (adiciona ou remove a classe CSS)
function virarCard() {
    document.getElementById('flashcard').classList.toggle('virado');
}

// Navegação
function proximoCard() {
    if (indiceAtual < cartasAtuais.length - 1) {
        indiceAtual++;
        document.getElementById('flashcard').classList.remove('virado');
        setTimeout(atualizarCard, 200); // Pequeno atraso para não trocar o texto no meio da animação
    }
}

function cardAnterior() {
    if (indiceAtual > 0) {
        indiceAtual--;
        document.getElementById('flashcard').classList.remove('virado');
        setTimeout(atualizarCard, 200);
    }
}