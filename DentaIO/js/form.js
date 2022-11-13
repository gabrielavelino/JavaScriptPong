function adicionaPaciente(event){
    event.preventDefault();

    // Pega os valores do formulario e coloca em uma variável
    var form = document.querySelector(".formulario");
    // var nome = form.nome.value;
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;

    var paciente = dadosPaciente(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        console.log("Paciente invalido!");
        alert("Não foi possível cadastrar paciente, peso ou altura inválida!");
        return;
    }

    // console.log(pacienteTr);
    alert("Paciente adicionado");
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
}

function dadosPaciente(form){
    // cria objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: IMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // cria uma tag td
    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso")
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");
    

    // adiciona o conteudo na na tag
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // adicionando a tag td para filho de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(validaPeso(paciente.peso)){
        console.log("entrou aqui peso");
    } else {
        console.log("entrou aqui peso!!!");
        erros.push("Peso invalido");
    }

    if(validaAltura(paciente.altura)){
        console.log("entrou aqui");
    } else {
        console.log("entrou aqui!!!");
        erros.push("Altura inválida!");
    }
    // console.log(erros);
    return erros;
}

var adicionarPaciente = document.querySelector(".enviar");

adicionarPaciente.addEventListener("click",adicionaPaciente);