const btnEnviar = document.querySelector("#btn")
const add = document.querySelector("#inpt")
const idade = document.querySelector("#inpt-idade")

async function  post() {

    const url = "https://alidu-c1446-default-rtdb.firebaseio.com/alunos.json"
    const newData = {
        nome: add.value, 
        idade: idade.value
    }
     const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Ttype': 'application/json'
      },
      body: JSON.stringify(newData)
     }) 
   }

   btnEnviar.addEventListener('click', post)  
   

