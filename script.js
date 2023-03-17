function calculate(){
    var altura= (document.getElementById("altura").value)/100
    var peso= document.getElementById("peso").value
    

    var imc= peso/altura **2;
    var text= ""



    if(imc < 18.5){
        text="Você está abaixo do peso!"
    }
    else if(imc < 24.9){
        text="Você está no peso Ideal!"

    }
    else if(imc < 29.9){
        text="Você está com Sobrepeso!"

    }
    else if(imc <39.9){
        text="Você está com Obesidade!"

    }
    else if(imc >39.9){
        text="Você está com Obesidade Mórbida!"

    }
    document.getElementById("text_area").innerText= text



}
