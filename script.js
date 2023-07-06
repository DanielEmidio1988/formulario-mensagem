const form = document.querySelector('form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mensagem = document.querySelector('#mensagem')
const errorMessage = document.querySelectorAll('error-message')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    resetErrors()
    validateData()
})

function setError(data, errorMessage){
    const errorMessageElement = data.nextElementSibling
    errorMessageElement.textContent = errorMessage
    data.parentElement.classList.add('error')
}

function resetErrors(){
    errorMessage.forEach((message)=>{
        message.textContent = ""
    })
    nome.parentElement.classList.remove('error')
    email.parentElement.classList.remove('error')
    assunto.parentElement.classList.remove('error')
    mensagem.parentElement.classList.remove('error')
}

function validateData(){
    const nameValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = assunto.value.trim()

    if(!nameValue){
        setError(nome, "Nome não pode ficar em branco")
    }

    if(!emailValue){
        setError(email, "E-mail não pode ficar em branco")
    }else if(!validateEmail(emailValue)){
        setError(email, "E-mail inválido!")
    }

    if(!assuntoValue){
        setError(assunto, "Assunto não pode ficar em branco")
    }

    if(!mensagemValue){
        setError(mensagem, "Mensagem não pode ficar em branco")
    }
}

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)
}