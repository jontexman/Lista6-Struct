const Aula = [
    {
        instrutor: 'Arthur Furtado',
        aula: 'Introdução ao React',
        assistido: true
    }
    ,

    {
        instrutor: 'Gabriel Xavier',
        aula: 'Html e Css',
        assistido: true
    }
    ,

    {
        instrutor: 'David Mendes',
        aula: 'Ruby',
        assistido: false
    }
    ,

    {
        instrutor: 'Felipe Lima',
        aula: 'Banco de Dados',
        assistido: true

    },

    {
        instrutor: 'Gabriel Cruz',
        aula: 'Models',
        assistido: true
    }


];

for(let iterator = 0; iterator<Aula.length; iterator++ )
    if(Aula[iterator].assistido==true) {
        console.log("Assisti a aula do instrutor " + Aula[iterator].instrutor + " sobre " + Aula[iterator].aula)
    }

    else {
        console.log("Ainda não assisti a aula do instrutor " + Aula[iterator].instrutor + " sobre " + Aula[iterator].aula)
    }
