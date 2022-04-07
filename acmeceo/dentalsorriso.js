'use strict'

//const para ativar modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

// repassa dados JSON para localstorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_clientdental')) ?? []
const setLocalStorage = (dbClientdental) => localStorage.setItem("db_clientdental", JSON.stringify(dbClientdental))

//inserindo editando e apagando clientes do localstorage
const deleteClient = (index) => {
    const dbClientdental = readClient()
    dbClientdental.splice(index, 1)
    setLocalStorage(dbClientdental)
}

const updateClient = (index, client) => {
    const dbClientdental = readClient()
    dbClientdental[index] = client
    setLocalStorage(dbClientdental)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClientdental = getLocalStorage()
    dbClientdental.push (client)
    setLocalStorage(dbClientdental)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}



const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveClient = () => {
    debugger
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            cpf: document.getElementById('cpf').value,
            peso: document.getElementById('peso').value,
            altura: document.getElementById('altura').value,

        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
            
        }
    }
}


// Tabela a ser inserida no html ao prencher os dados da modal

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td data-label="nome">${client.nome}</td>
        <td data-label="cpf">${client.cpf}</td>
        <td data-label="peso (kg)">${client.peso}</td>
        <td data-label="altura (cm)">${client.altura}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

//Limpar tabela inserida
const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClientdental = readClient()
    clearTable()
    dbClientdental.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('cpf').value = client.cpf
    document.getElementById('peso').value = client.peso
    document.getElementById('altura').value = client.altura
    document.getElementById('nome').dataset.index = client.index
}


//ação de deletar e alerta condicional de exclusão de novo funcionário
const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o funcionário ${client.nome} do plano ?`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}
// ações de click para abrir, fechar, salvar e deletar 

updateTable()

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)