var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function(){
    console.log("buscando paciente");
    // https://api-pacientes.herokuapp.com/pacientes
    var xhr = new XMLHttpRequest();

    // pega a requisição em uma web
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        // console.log(xhr.responseText);

        if(xhr.status == 200){
            var paciente = xhr.responseText;
            var pacientes = JSON.parse(paciente);
    
    
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
        }
    })
    // enviar a requisição
    xhr.send();
})