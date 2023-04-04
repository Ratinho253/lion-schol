'use strict'

import { button } from "./module/api.js"

const botaoCurso = await button()

//Primeira tela
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
//Segunda Tela
const getAlunos = async (filtro) =>{

    const urlTodosAlunos = `https://dull-rose-quail-yoke.cyclic.app/v1/lion-school/alunos`;
    const responseTodosAlunos = await fetch(urlTodosAlunos);
    const dataTodosAlunos = await responseTodosAlunos.json();

    const urlAlunosCurso = `https://dull-rose-quail-yoke.cyclic.app/v1/lion-school/alunos?cursos=${filtro}`
    const responseAlunosCurso = await fetch(urlAlunosCurso);
    const dataAlunosCurso = await responseAlunosCurso.json();

    const urlAlunosStatus = `https://dull-rose-quail-yoke.cyclic.app/v1/lion-school/alunos?status=${filtro}`
    const responseAlunosStatus = await fetch(urlAlunosStatus);
    const dataAlunosStatus = await responseAlunosStatus.json();

    return{
        listaTodosAlunos: dataTodosAlunos,
        listaAlunosCurso: dataAlunosCurso,
        listaAlunosStatus: dataAlunosStatus
    }
}

carregarCurso()