'use strict'

import {button} from "./module/api.js"

const botaoCurso = await button()


const criandoCardCursos = (curso, indice) => {

    const divButtons = document.createElement('div');
    divButtons.classList.add('container-buttons');

    const divCurso = document.createElement('div');
    divCurso.classList.add('cards-tag');

    const cardCurso = document.createElement('div');
    cardCurso.classList.add(`curso_${curso.sigla}`);

    const imgCurso = document.createElement('img');
    imgCurso.classList.add(`img-${curso.sigla}`);
    imgCurso.src = curso.icone

    const textCurso = document.createElement('p');
    textCurso.classList.add(`${curso.sigla}`);
    textCurso.textContent = curso.sigla;

    cardCurso.append(imgCurso, textCurso);


    divButtons.append(cardCurso);


    divButtons.onclick = () => {
        carregarCurso(indice)
    }
    return divButtons;



}

const carregarCurso = () => {
    const cardPrincipal = document.getElementById('card-principal')
    const componentesCards = botaoCurso.cursos.map(criandoCardCursos)

    cardPrincipal.replaceChildren(...componentesCards)
}

// carregarCurso()

