'use strict'

import { getItensCurso } from "./module/api.js"

import { getAlunos } from "./module/api.js"


const botaoCurso = await getItensCurso()



//Primeira tela
const criandoCardCursos = (curso, indice) => {
    const divPrimeiraTela = document.getElementById('primeira-tela')
    const divSegundaTela = document.getElementById('cards-alunos_container')
    const headerSegundaTela = document.getElementById('card-status')

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


    cardCurso.onclick = () => {
        carregarCardsAlunosCurso(indice)
        divPrimeiraTela.style.display = 'none'
        divSegundaTela.style.display = 'grid'
        headerSegundaTela.style.display = 'flex'

    }
    return divButtons;

}

const carregarCurso = () => {
    const cardPrincipal = document.getElementById('card-principal')
    const componentesCards = botaoCurso.cursos.map(criandoCardCursos)

    cardPrincipal.replaceChildren(...componentesCards)
}
//Segunda Tela
const criandoCardAlunos = (aluno, indice) => {

    const cardAluno = document.createElement('div');
    cardAluno.classList.add('card');

    const imgCardAluno = document.createElement('img');
    imgCardAluno.classList.add('card__image-aluno');
    imgCardAluno.src = aluno.image;

    const nomeCardAluno = document.createElement('h5');
    nomeCardAluno.classList.add('aluno-name__title');
    nomeCardAluno.textContent = aluno.nome;

    cardAluno.append(imgCardAluno, nomeCardAluno);

    return cardAluno;

}
const carregarCardsAlunosCurso = async (indice) => {
    const sigla = await botaoCurso.cursos[indice].sigla
    const listaAlunos = await getAlunos(sigla)
    console.log(listaAlunos.listaAlunosCurso);
    const cardPrincipalAlunos = document.getElementById('cards-alunos_container');
    const dadosAlunosCard = await listaAlunos.listaAlunosCurso.map(criandoCardAlunos)

    cardPrincipalAlunos.replaceChildren(...dadosAlunosCard)
}
carregarCurso()