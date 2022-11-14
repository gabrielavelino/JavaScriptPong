var filtro = document.querySelector(".filtroBusca");

filtro.addEventListener("input", function(){
    // console.log(filtro.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(filtro.value.length > 0){
        for(var i = 0; i <pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var regex = new RegExp(filtro.value, "i");
            // console.log(nome);
            if(!regex.test(nome)){
                paciente.classList.add("filtragem");
                // console.log("entrou aqui!!!");
            } else {
                paciente.classList.remove("filtragem");
                // console.log("Nao entrou aqui");
            }
        }
    } else {
        for (var i = 0;i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("filtragem");
        }
    }
})