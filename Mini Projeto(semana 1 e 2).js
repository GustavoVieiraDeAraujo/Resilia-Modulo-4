// Necessario ter Node.js instalado;
// Necessario instalar pacote 'readline-sync' do Node.js;
// Para instalar o pacote rode o seguinte comando:
// npm install readline-sync 


import leitor from "readline-sync"

let propriedadeCSS = "iniciar"
let listaPropriedadesCSS = []

while (propriedadeCSS !== "Sair"){
  propriedadeCSS = leitor.question('Digite uma propriedade CSS ou digite "Sair" para mostrar as propriedades ordenadas de forma alfabetica e encerrar o programa: ')
  const promissePropriedadeCSS = new Promise ((resolve,reject)=> {
    (propriedadeCSS !== "Sair") ? resolve(propriedadeCSS) : reject()
  })
  .then(resultadoPromisse => {
    listaPropriedadesCSS.push(resultadoPromisse)
  })
  .catch(() => {
    listaPropriedadesCSS.sort()
    console.log()
    console.log("Propriedades ordenadas de forma alfabetica")
    console.log("↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ")
    for(let i = 0; i<listaPropriedadesCSS.length; i++){
      console.log(""+listaPropriedadesCSS[i])
    }
  })   
}
