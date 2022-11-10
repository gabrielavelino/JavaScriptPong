//alert("Ola bem vindo a Denta.io!");
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
//titulo.textContent = "TESTE";

//Caculo IMC
function calculoIMC() {

    function IMC(){
        var imc = tdPeso.textContent/(tdAltura.textContent*tdAltura.textContent);
        return imc;
    }

    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i < pacientes.length; i++){
        console.log(pacientes[i].textContent);

        var paciente = pacientes[i];
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");


        console.log(paciente.textContent);
        console.log(tdPeso.textContent);
        console.log(tdAltura.textContent);

        var imc = IMC();

        console.log(imc);

        var tdImc = paciente.querySelector(".info-imc");

        tdImc.textContent = imc.toFixed(2);

        paciente.classList.add("tabelasCertas")

    }

}
calculoIMC();
// Fim

var adicionarPaciente = document.querySelector(".enviar");

adicionarPaciente.addEventListener("click",msn);

function msn(){
    alert("Paciente adicionado");
}