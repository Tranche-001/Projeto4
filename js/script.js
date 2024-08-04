import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
// variáveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const errorSign = document.querySelector(".alert-error")



//3 maneiras de criar e atribuir função a um evento
/// form.onsubmit = () => {}
//  form.onsubmit = handleSubmit
//  function handleSubmit() {}
// Porque a página recarrega. O padrão de um evento submmit é recarregar a página

form.onsubmit = function(event) {
  event.preventDefault() // Isso evita que a página recarrega
  
  
  const weight = inputWeight.value 
  const height = inputHeight.value

  const showAlertError = isNaN(weight) || isNaN(height)

  if(showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
  
}
//Não faça o recarregamento da página
//Pegar valores que existem nos campos



function IMC(weight, height){
  return (weight/((height/100) ** 2)).toFixed(2)
}
