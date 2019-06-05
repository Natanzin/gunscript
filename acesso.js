function acesso (fomr){
    
    if( form.nome.value == "natanfarias" && form.senha.value == "07071999" || 
        form.nome.value == "victorjose" && form.senha.value == "29081999" || 
        form.nome.value == "arthurfalcomer" && form.senha.value == "22121999" ||
        form.nome.value == "melquisedequemarques" && form.senha.value == "06021985" ||  
        form.nome.value == "visitante" && form.senha.value == "crossfire" ||
        form.nome.value == "maxeduardo" && form.senha.value == "professor" 
        ){
            location = "gunscript.html"
        }
        else{
            form.nome.velue == ""
            form.senha.value == ""
            alert("Dados incorretos!")
        }
}