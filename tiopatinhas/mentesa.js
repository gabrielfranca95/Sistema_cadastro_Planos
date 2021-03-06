'use strict'
//const para ativar modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

// repassa dados JSON para localstorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_clientmentesa')) ?? []
const setLocalStorage = (dbClientmentesa) => localStorage.setItem("db_clientmentesa", JSON.stringify(dbClientmentesa))

//inserindo editando e apagando clientes do localstorage
const deleteClient = (index) => {
    const dbClientmentesa = readClient()
    dbClientmentesa.splice(index, 1)
    setLocalStorage(dbClientmentesa)
}

const updateClient = (index, client) => {
    const dbClientmentesa = readClient()
    dbClientmentesa[index] = client
    setLocalStorage(dbClientmentesa)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClientmentesa = getLocalStorage()
    dbClientmentesa.push (client)
    setLocalStorage(dbClientmentesa)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('cpf').dataset.index = 'new'
}

const saveClient = () => {
    debugger
    if (isValidFields()) {
        const client = {
            cpf: document.getElementById('cpf').value,
            hora: document.getElementById('hora').value,

        }
        const index = document.getElementById('cpf').dataset.index
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
        <td data-label="cpf">${client.cpf}</td>
        <td data-label="horas meditadas">${client.hora}</td>

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
    const dbClientmentesa = readClient()
    clearTable()
    dbClientmentesa.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('cpf').value = client.cpf
    document.getElementById('hora').value = client.hora

    document.getElementById('cpf').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

//a????o de deletar e alerta condicional de exclus??o de novo funcion??rio
const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o funcion??rio ${client.cpf} do plano ?`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}
// a????es de click para abrir, fechar, salvar e deletar 
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