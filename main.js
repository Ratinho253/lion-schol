'use strict'

// //                 <!-- <a href="#" class="curso">
// <div class="area">
// <img class="image-figure" src="./img/DS.png" alt="code">
// <p class="nome-curso">DS</p>
// </div>
// </a> -->
import { cursos } from "./module/script.js";

console.log(cursos);

const criandoCardCursos = (curso, indice) => {

    const divCurso = document.createElement('div')
    divCurso.classList.add('cards-tag')

    const cardCurso = document.createElement('div')
    cardCurso.classList.add('ds')

    const imgCurso = document.createElement('img')
    imgCurso.classList.add('img-ds')
    imgCurso.src = `./img/${curso.icone}`

    const textCurso = document.createElement('p')
    textCurso.classList.add('ds')
    textCurso.textContent = curso.sigla

    card.addEventListener('click', () => {
        localStorage.setItem('curso', sigla.textContent)
    })

    cardCurso.append(imgCurso, textCurso)
    
    return divCurso
}

const carregarCard = () => {
    const card = document.getElementById('cards1')
    const cards1 = contatos.map(criandoCardCursos)
    card.replaceChildren(...cards1)
}

carregarCard()