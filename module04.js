
function checaIdade(idade){
    return new Promise(function(resolve, reject){
        setTimeout(function(){ idade >= 18 ? resolve() : reject()}, 2000);
    })
}

checaIdade(16)
    .then(function(){
        console.log("Maior que 18 anos");
    })
    .catch(function(){
        console.log("Menor que 18 anos")
    })