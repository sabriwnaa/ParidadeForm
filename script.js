const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    //faz com que o formulario nao realize o comportamento padrao
    //(comportamento padrao é mandar dados para algum lugar e recarregar pagina toda)
    e.preventDefault()

    const dadoForm = new FormData(form)
    let valor = dadoForm.get("numero")

    if((parseInt(valor)%2)==0) {
        document.querySelector('h1').innerHTML = "PAR"
    } else {
        document.querySelector('h1').innerHTML = "IMPAR"
    }


})