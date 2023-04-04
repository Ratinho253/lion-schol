'use strict'

export const button = async () =>{

    const url = `https://dull-rose-quail-yoke.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data =  await response.json()

    return data
}

