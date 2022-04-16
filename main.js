'use strict'

const openModal = () => document.getElementById('modal')
  .classList.add('active')

const closeModal = () => document.getElementById('modal')
  .classList.remove('active')


const tempClient = {
  nome: "Dimas",
  email: "dima.capelari@gmail.com",
  celular: "19997075772",
  cidade: "São José do Rio Pardo"
}

// CRUD - create read update delete

const createCliente = (cliente) => {

}

// Eventos
document.getElementById('cadastrarCliente')
  .addEventListener('click', openModal)

document.getElementById('modalClose')
  .addEventListener('click', closeModal)