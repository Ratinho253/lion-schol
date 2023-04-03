'use strict'

// Tela 1 finalizada

// import {button} from "./module/api.js"

// const botaoCurso = await button()


// const criandoCardCursos = (curso, indice) => {

//     const divButtons = document.createElement('div');
//     divButtons.classList.add('container-buttons');

//     const divCurso = document.createElement('div');
//     divCurso.classList.add('cards-tag');

//     const cardCurso = document.createElement('div');
//     cardCurso.classList.add(`curso_${curso.sigla}`);

//     const imgCurso = document.createElement('img');
//     imgCurso.classList.add(`img-${curso.sigla}`);
//     imgCurso.src = curso.icone

//     const textCurso = document.createElement('p');
//     textCurso.classList.add(`${curso.sigla}`);
//     textCurso.textContent = curso.sigla;

//     cardCurso.append(imgCurso, textCurso);


//     divButtons.append(cardCurso);


//     divButtons.onclick = () => {
//         carregarCurso(indice)
//     }
//     return divButtons;



// }

// const carregarCurso = () => {
//     const cardPrincipal = document.getElementById('card-principal')
//     const componentesCards = botaoCurso.cursos.map(criandoCardCursos)

//     cardPrincipal.replaceChildren(...componentesCards)
// }

// carregarCurso()

// tela 2 finalizando 

import { alunos } from "./module/script2.js";


const criandoCarAluno = (aluno, indice ) => {

    const divAluno = document.createElement('div')
    divAluno.classList.add('cardAluno')

    const divFoto = document.createElement('div')
    divAluno.classList.add('fotoAluno')

    const img = document.createElement('img')
    img.classList.add('img-aluno')
    img.src = aluno.foto

    divFoto.append(img)

    divAluno.append(divFoto)

    divAluno.onclick = () => {
        carregarAluno_grafico(indice)
    }

    return divAluno

}

const carregarAluno_grafico = () => {
    console.log(alunos);
    const cardAluno = document.getElementById('cardAluno')
    const componentesCards = alunos.map(criandoCarAluno)

    cardAluno.replaceChildren(...componentesCards)
}


carregarAluno_grafico()

