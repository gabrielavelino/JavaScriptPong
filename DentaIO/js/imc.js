//alert("Ola bem vindo a Denta.io!");
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
//titulo.textContent = "TESTE";

//Caculo IMC


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
//console.log(pacientes[i].textContent);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // console.log(paciente.textContent);
    // console.log(tdPeso.textContent);
    // console.log(tdAltura.textContent);

    var imc = IMC(peso,altura);

    //console.log(imc);

    // Serve para acessar um css
    // paciente.classList.add("tabelasCertas")
    
    tdImc.textContent = imc;

}




function IMC(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);;
}
// Fim