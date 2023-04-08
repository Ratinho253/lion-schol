'use strict'

import { getItensCurso } from "./module/api.js"

import { getAlunos, getAlunosCurso, getAlunosStatus } from "./module/api.js"




const botaoCurso = await getItensCurso();
const listaTodosAlunos = await getAlunos();



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
        divSegundaTela.style.display = 'flex'
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

    const menuDropdown = document.getElementById('menu-dropdown_content')

    const cardPlace = document.createElement('div');
    cardPlace.classList.add('card-curso_place');

    const cardAluno = document.createElement('div');
    cardAluno.classList.add('card');

    const imgCardAluno = document.createElement('img');
    imgCardAluno.classList.add('card__image-aluno');
    imgCardAluno.src = aluno.image;

    const nomeCardAluno = document.createElement('h5');
    nomeCardAluno.classList.add('aluno-name__title');
    nomeCardAluno.textContent = aluno.nome;



    if (aluno.status == 'Finalizado') {
        cardAluno.style.backgroundColor = '#3347B0'
    } else {
        cardAluno.style.backgroundColor = '#E5B657'
    }

    cardAluno.append(imgCardAluno, nomeCardAluno);
    cardPlace.append(cardAluno)


    return cardPlace;

}
const criandoTituloCurso = (aluno) => {

    const cardPrincipalAlunos = document.getElementById('cards-alunos_container');
    const titleCard = document.createElement('h1')
    titleCard.classList.add('nome-curso_title')

    if (aluno.sigla == 'DS') {
        titleCard.textContent = 'Técnico em Desenvolvimento de Sistemas'

    } else if (aluno.sigla == 'RDS') {

        titleCard.textContent = 'Técnico em Redes de Computadores'
    }

    cardPrincipalAlunos.append(titleCard)
}
const carregarCardsAlunosCurso = async(indice) => {
    const cardPrincipalAlunos = document.getElementById('cards-alunos_container');

    const cardsAlunos = document.getElementById('card-curso_place');
    const sigla = await botaoCurso.cursos[indice].sigla

    const listaAlunos = await getAlunosCurso(sigla)
    const dadosAlunosCard = await listaAlunos.listaAlunosCurso.alunos.map(criandoCardAlunos)
    const dadosTituloCurso = criandoTituloCurso(listaAlunos.listaAlunosCurso.alunos[1])

    cardsAlunos.replaceChildren(...dadosAlunosCard)

}
const criandoCarregamentoStatus = async() => {
    const buttons = document.querySelectorAll('.card-')

    buttons.forEach(button => {
        button.addEventListener('click', async() => {
            const idClicado = button.id;
            console.log(idClicado);

            if (idClicado == 'status') {

                const todos = await getAlunos()


                const cardPrincipalAlunos = document.getElementById('cards-alunos_container');

                const cardsAlunos = document.getElementById('card-curso_place');

                const dadosAlunosCard = await todos.listaTodosAlunos.alunos.map(criandoCardAlunos)
                cardsAlunos.replaceChildren(...dadosAlunosCard)



            } else {
                const retorno = await getAlunosStatus(idClicado)

                const cardPrincipalAlunos = document.getElementById('cards-alunos_container');

                const cardsAlunos = document.getElementById('card-curso_place');

                const dadosAlunosCard = await retorno.listaAlunosStatus.alunos.map(criandoCardAlunos)
                cardsAlunos.replaceChildren(...dadosAlunosCard)

            }



        })
    });



}

carregarCurso()
criandoCarregamentoStatus()