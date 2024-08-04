//Estruração de dados do modal
// Dar mais clareza do que é resonsabilidade do Modal
// Deixa a leitura mais clara
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title'),
  buttonClose:  document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

//Essa é a melhor maneira
// window.onkeydown é bad ;(
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
  if(event.key == 'Escape'){
    Modal.close()
  }
}