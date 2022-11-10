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
        //console.log(pacientes[i].textContent);

        var paciente = pacientes[i];
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");


        // console.log(paciente.textContent);
        // console.log(tdPeso.textContent);
        // console.log(tdAltura.textContent);

        var imc = IMC();

        //console.log(imc);

        var tdImc = paciente.querySelector(".info-imc");

        tdImc.textContent = imc.toFixed(2);

        paciente.classList.add("tabelasCertas")

    }

}
calculoIMC();
// Fim

var adicionarPaciente = document.querySelector(".enviar");

adicionarPaciente.addEventListener("click",adicionaPaciente);

function adicionaPaciente(event){
    alert("Paciente adicionado");
    event.preventDefault();

    // Pega os valores do formulario e coloca em uma variável
    var form = document.querySelector(".formulario");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // console.log(nome);
    // console.log(peso);
    // console.log(altura);
    // console.log(gordura);

    // Cria uma tag tr
    var pacienteTr = document.createElement("tr");

    // cria uma tag td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // adiciona o conteuna na tag
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculoIMC();

    // adicionando a tag td para filho de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}