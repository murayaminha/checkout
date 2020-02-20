let inputCPF = document.getElementById("cpfUsuario")
let inputSenha = document.getElementById("senhaUsuario")
let inputConfirmaSenha = document.getElementById("confirmaSenha")
let inputCep = document.getElementById("cepUsuario")
let inputCPFTitular = document.getElementById("cpfTitular")
let inputNCartao = document.getElementById("nCartaoUsuario")
let inputCidade = document.getElementById("cidadeUsuario")
let inputEndereco = document.getElementById("enderecoUsuario")
let inputBairro = document.getElementById("bairroUsuario")


inputCPF.addEventListener('keyup',(e)=>{
   if(isNaN(inputCPF.value)) {  
       inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1))
        console.log(inputCPF.value)
}
if(isNaN(inputCPF.value.length>11)) {  
    inputCPF.value = inputCPF.value.substring(0,11)
     console.log(inputCPF.value)
}
})
let config = {
    method: "get"
    }

function buscarCep(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json/unicode/`)
    .then(response =>response.json())
    .then(dados=>{
        if(dados.erro){
            return inputCep.setAttribute("class","form-controlis-invalid")
        }
        else{
        inputCep.setAttribute("class","form-control is-valid")
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEndereco.value = dados.logradouro
        
    }})
}


inputCep.addEventListener('keyup',(e)=>{
    if(isNaN(inputCep.value)) {  
        inputCep.value = inputCep.value.substring(0, (inputCep.value.length -1))
         console.log(inputCep.value)
 }
 if(inputCep.value.length>=8) {  
    inputCep.value = inputCep.value.substring(0,8)
      buscarCep(inputCep.value)
 }
 })

 

inputConfirmaSenha.addEventListener('keyup',(e)=>{
    if(inputConfirmaSenha.value != inputSenha.value) {  
        inputConfirmaSenha.setAttribute("class","form-control is-invalid")
    }
    else{
        inputConfirmaSenha.setAttribute("class","form-control is-valid")
    }
 })




 inputCPFTitular.addEventListener('keyup',(e)=>{
    if(isNaN(inputCPFTitular.value)) {  
        inputCPFTitular.value = inputCPFTitular.value.substring(0, (inputCPFTitular.value.length -1))
         console.log(inputCPFTitular.value)
 }
 if(isNaN(inputCPFTitular.value.length>11)) {  
    inputCPFTitular.value = inputCPFTitular.value.substring(0,11)
     
 }
 })

 inputNCartao.addEventListener('keyup',(e)=>{
    if(isNaN(inputNCartao.value)) {  
        inputNCartao.value = inputNCartao.value.substring(0, (inputNCartao.value.length -1))
         console.log(inputNCartao.value)
 }
 if(isNaN(inputNCartao.value.length>16)) {  
    inputNCartao.value = inputNCartao.value.substring(0,16)
      console.log(inputNCartao.value)
 }
 })


 inputCidade.addEventListener('keyup',(e)=>{
    if(!isNaN(inputCidade.value)) {  
        inputCidade.value = inputCidade.value.substring(0, (inputCidade.value.length -1))
         console.log(inputCidade.value)
 }

 })


