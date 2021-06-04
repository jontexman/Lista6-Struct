let name = prompt("Digite o nome do aluno: ")
let faltas = Number(prompt("Digite o número de faltas: "))
let nota = Number(prompt("Digite a nota do aluno "))

console.log( name + ", sua menção foi " + convertNotatoMencao(nota,faltas) + "! Você foi " + checkApproved(nota,faltas))

function convertNotatoMencao(nota,faltas){ 
    if( faltas/100 >= 0.25) {
        let mencao = "SR";
        return mencao;
    }
    else {
        if (nota < 3) {
            let mencao = "II";
            return mencao;
        }
        else if ( nota >= 3 && nota < 5) {
            let mencao = "MI";
            return mencao;
            
        }
        else if ( nota >= 5 && nota < 7) {
            let mencao = "MM";
            return mencao;
        }
        else if ( nota >= 7 && nota < 9) {
            let mencao = "MS";
            return mencao;
        }
        else{
            let mencao = "SS";
            return mencao;
        }

    }
}

function checkApproved (nota,faltas){
    let mencao = convertNotatoMencao(nota, faltas) ; 
    if (mencao == "II" || mencao == "SR" || mencao == "MI" ) {
        return "Reprovado";
    }   
    else {
        
        return "Aprovado";
    } 
    
}
