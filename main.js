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

// tela 3 tela 

import { alunos } from "./module/script2.js";

const matricula = '20151001001'


const criandoCarAluno = (aluno) => {


    const divFoto = document.createElement('div')
    divFoto.classList.add('fotoAluno')

    const img = document.createElement('img')
    img.classList.add('img-aluno')
    img.src = aluno.foto

    const text = document.createElement('p')
    text.classList.add('name-aluno')
    text.textContent = aluno.nome;
    

    divFoto.append(img,text)

    
    return divFoto

}

const carregarAluno_grafico = () => {
    
    const cardAluno = document.getElementById('cardAluno')
    const componentesCards = alunos.map(criandoCarAluno)

    cardAluno.appendChild(...componentesCards)
}


const criandoGrafico = (aluno) => {
    console.log(aluno);
    if(aluno.matricula == matricula){
        console.log('teste if');
        const cardMateria = document.createElement('div')
        cardMateria.classList.add('cardMaterias')


        const grafico = document.createElement('div')
        grafico.classList.add('grafico')

        aluno.curso[0].disciplinas.forEach(function(disciplina){
            const segura = document.createElement('div')
            segura.classList.add('segura')
            const textNota =document.createElement('p')
            textNota.textContent = disciplina.media

            const tamanho_nota = document.createElement('div')
            tamanho_nota.classList.add('potuacao')

            const valorNota = document.createElement('div')
            const valor = parseInt(textNota.textContent)

            if(parseInt(textNota.textContent) >=0 && parseInt(textNota.textContent)<=100){
                textNota.classList.add('nota_aprovado')
                valorNota.classList.add('nota_aprovado')
            }else if(parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent)<= 60){
                textNota.classList.add('nota_reprovado')
                valorNota.classList.add('nota_reprovado')
            }else if(parseInt(textNota.textContent) >=61 && parseInt(textNota.textContent)<= 69){
                textNota.classList.add('nota_meio_termo')
                valorNota.classList.add('nota_meio_termo')
            }

            const altura = `${(valor / 50 ) * 50}%`
            valorNota.style.height = altura


            const materia = document.createElement('span')
            materia.classList.add('disciplina')
            materia.textContent = disciplina.nome.substr(1,2,3).toUpperCase()

            tamanho_nota.append(valorNota)
            segura.append(textNota, tamanho_nota, materia)
            grafico.append(segura)
        })
        
        cardMateria.append(grafico)
        console.log(cardMateria);
        return cardMateria
    }else{
        return ""
    }
}

const carregar_grafico = () => {
    
    const container = document.querySelector('.cardMaterias')
    const grafico = alunos.map(criandoGrafico)

    container.replaceChildren(...grafico)
}



carregar_grafico()
carregarAluno_grafico()

