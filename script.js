
const bancoDeCartas = [

    { tema: 'propriedades', img: 'https://placehold.co/400x200/f39c12/white?text=Onda+Eletromagnetica', p: 'O que é a luz?', r: 'É uma onda eletromagnética transversal que pode se propagar no vácuo.' },

    { tema: 'reflexao', img: 'https://placehold.co/400x200/3498db/white?text=Leis+da+Reflexao', p: 'O que diz a 2ª Lei da Reflexão?', r: 'O ângulo de incidência é sempre igual ao ângulo de reflexão.' },

    { tema: 'fenomenos', img: 'https://placehold.co/400x200/9b59b6/white?text=Refracao', p: 'O que é a refração da luz?', r: 'É a mudança na velocidade (e geralmente na direção) da luz quando ela passa de um meio para outro diferente.' },

    { tema: 'lentes', img: 'https://placehold.co/400x200/2ecc71/white?text=Lente+Convergente', p: 'Como se comporta uma lente convergente?', r: 'Ela faz com que os raios de luz paralelos que passam por ela se cruzem em um único ponto (foco).' },

    { tema: 'optica_corpo', img: 'https://placehold.co/400x200/e74c3c/white?text=Miopia', p: 'Qual problema de visão é corrigido com lentes divergentes?', r: 'A miopia, pois a imagem se forma antes da retina.' },
    { tema: 'optica_corpo', img: 'https://placehold.co/400x200/e74c3c/white?text=Cristalino', p: 'Qual estrutura do olho funciona como uma lente biconvexa natural?', r: 'O cristalino, que foca os raios de luz na retina.' }
];

let cartasAtuais = [];
let indiceAtual = 0;


function carregarTema(temaSelecionado) {
    cartasAtuais = bancoDeCartas.filter(carta => carta.tema === temaSelecionado);
    indiceAtual = 0;

    document.querySelector('.flashcard-container').style.display = 'flex';

    document.getElementById('flashcard').classList.remove('virado');
    
    atualizarCard();
}


function atualizarCard() {
    if (cartasAtuais.length === 0) return;

    const carta = cartasAtuais[indiceAtual];
    
    document.getElementById('card-image').src = carta.img;
    document.getElementById('card-question').innerText = carta.p;
    document.getElementById('card-answer').innerText = carta.r;
    
    document.getElementById('card-counter').innerText = `${indiceAtual + 1} / ${cartasAtuais.length}`;
}


function virarCard() {
    document.getElementById('flashcard').classList.toggle('virado');
}


function proximoCard() {
    if (indiceAtual < cartasAtuais.length - 1) {
        indiceAtual++;
        document.getElementById('flashcard').classList.remove('virado');
        setTimeout(atualizarCard, 200);
    }
}

function cardAnterior() {
    if (indiceAtual > 0) {
        indiceAtual--;
        document.getElementById('flashcard').classList.remove('virado');
        setTimeout(atualizarCard, 200);
    }
}