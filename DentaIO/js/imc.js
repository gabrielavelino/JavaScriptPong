//alert("Ola bem vindo a Denta.io!");
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
//titulo.textContent = "TESTE";

//Caculo IMC


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
//console.log(pacientes[i].textContent);

    var paciente = pacientes[i];
    paciente.classList.add("#pacienteInvalido");
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // console.log(paciente.textContent);
    // console.log(tdPeso.textContent);
    // console.log(tdAltura.textContent);
    
    var pesoValido = validaPeso(peso);
    
    var alturaValido = validaAltura(altura);

    if(!pesoValido){
        console.log("Peso invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("tabelasErradas");
    } 

    if(!alturaValido){
        console.log("Altura invalida!");
        alturaValido = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("tabelasErradas");
    }

    if(pesoValido == true){
        var imc = IMC(peso,altura);

        //console.log(imc);

        // Serve para acessar um css
        // paciente.classList.add("tabelasCertas")

        tdImc.textContent = imc;
    }
    

}


function validaAltura(altura){
    if(altura < 2.10 && altura > 0.0){
        console.log("altura válida!!!");
        return true;
    } else {
        console.log("altura inválida!!!");
        return false;
    }
}

function validaPeso(peso){
    if(peso < 250 && peso >= 0){
        return true;
    } else {
        return false;
    }

}



function IMC(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);;
}
// Fim