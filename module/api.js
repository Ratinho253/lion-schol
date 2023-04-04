'use strict'

export const button = async () =>{

    const url = `https://dull-rose-quail-yoke.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data =  await response.json()

    return data
}

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

}