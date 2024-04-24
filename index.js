const form = document.querySelector('form');
const h2 = document.querySelector('h2');
// ----------------------------- 


form.addEventListener("submit", (event) =>{

    event.preventDefault();

    // capturar valores
    let velPermitida = Number(form.inVelocidadePermitida.value);
    let velAtual = Number(form.inVelocidadeCondutor.value);
    
    let leve =  velPermitida * 0.1;
   
    if(velAtual <= velPermitida){
        h2.innerText = `sua velocidade : ${velAtual}. não resultou em multa. Parabéns!`
        h2.style.color = "green";
        h2.style.textAlign = "center";
    }
   
    else if(velAtual <= (velPermitida + leve)){
        h2.innerText = `sua velocidade : ${velAtual}! Resultou em multa leve.`
        h2.style.color = "orange";
        h2.style.textAlign = "center";
    }
    else{
        h2.innerText = `sua velocidade : ${velAtual}! Resultou em multa grave.`
        h2.style.color = "red";
        h2.style.textAlign = "center";
    }
    console.log(grave, leve)
});