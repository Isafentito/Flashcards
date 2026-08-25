
const bancoDeCartas = [

    { tema: 'propriedades', img: 'https://placehold.co/400x200/f39c12/white?text=Onda+Eletromagnetica', p: 'o que é propriedades da luz?', r: 'As propriedades da luz são as características que descrevem como a luz se comporta e interage com diferentes materiais.' },
    { tema: 'propriedades', img: 'https://placehold.co/400x200/f39c12/white?text=Velocidade', p: 'Tipos de propriedades da luz:', r: 'Reflexão: quando a luz bate em uma superfície e retorna.' 
    'Refração: quando a luz passa de um meio para outro e muda sua direção e velocidade.'
    'Difração: quando a luz contorna obstáculos ou se espalha ao passar por uma abertura pequena.' 
    'Dispersão: quando a luz branca se separa em várias cores.' 
    'Absorção: quando um material absorve parte da energia da luz, geralmente transformando-a em calor.'
    'Propagação: a luz pode se deslocar pelo espaço; em um meio homogêneo e transparente, ela se propaga em linha reta.' },
    

    { tema: 'reflexao', img: 'https://placehold.co/400x200/3498db/white?text=Leis+da+Reflexao', p: 'O que é a Reflexão?', r: 'A reflexão da luz é o fenômeno óptico que acontece quando os raios de luz atingem uma superfície e retornam para o meio de onde vieram.' },
    { tema: 'reflexao', img: 'https://placehold.co/400x200/3498db/white?text=Espelho+Plano', p: 'Tipos de Reflexão:', r: 'Reflexão Regular: Ocorre em superfícies muito lisas e polidas. Os raios de luz batem e voltam todos paralelos, formando uma imagem nítida.'
    'Reflexão Difusa: Ocorre em superfícies ásperas ou irregulares. Os raios de luz batem e se espalham em várias direções diferentes. Não forma uma imagem refletida nítida, mas é o que ilumina o ambiente e nos permite ver os objetos de qualquer ângulo.'}
    
    { tema: 'fenomenos', img: 'https://placehold.co/400x200/9b59b6/white?text=Refracao', p: 'O que é fenômeno da luz?', r: 'As propriedades da luz definem como essa forma de radiação eletromagnética interage com a matéria, transporta energia e se propaga pelo espaço.' },
    { tema: 'fenomenos', img: 'https://placehold.co/400x200/9b59b6/white?text=Dispersao', p: 'Tipos de fenômeno:', r: 'Refração: A luz muda de meio e sofre um desvio em sua direção.'
    'Dispersão: A luz branca se divide nas cores do arco-íris ao passar por um prisma ou gota da água.'
    'Difração: A luz consegue "contornar" pequenos obstáculos ou frestas estreitas.'

'Interferência: Ondas de luz se cruzam, somando-se ou anulando-se (cria o efeito colorido nas bolhas de sabão).'

'Absorção: O objeto "suga" a luz em vez de refleti-la, transformando-a em calor. É isso que define a cor que enxergamos.'

'Polarização: Um filtro que faz a luz vibrar em apenas uma direção (usado em óculos de sol para tirar o reflexo).' },
    
    { tema: 'lentes', img: 'https://placehold.co/400x200/2ecc71/white?text=Lente+Convergente', p: 'O que são lentes?', r: 'As lentes são meios transparentes que usam a refração para desviar a luz e formar imagens.' },
    { tema: 'lentes', img: 'https://placehold.co/400x200/2ecc71/white?text=Lupa', p: 'Tipos de lentes:', r: 'Convergentes: Têm bordas finas. Elas "juntam" os raios de luz em um único ponto (foco).'

'Divergentes: Têm bordas grossas. Elas espalham os raios de luz que passam por elas.' },
    
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