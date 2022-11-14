// var paciente = document.querySelectorAll(".paciente");

// console.log(paciente);

// paciente.forEach(function(paciente) {
//     paciente.addEventListener("dblclick",function(){
//         this.remove();
//         console.log("removido");
//     });

// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    // console.log(event.target);
    // sobe a hierarquia para o pai do filho
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500)
    
})

