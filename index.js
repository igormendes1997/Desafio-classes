class Heroi{
    constructor( nome, idade , tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
    }
    // Realizar um ataque
    atacar(){
        let ataque;

        //Ataque com base no tipo do Herói
        switch (this.tipo){
            case "ninja":
                ataque = "usou shuriken" ;
              

        }

    console.log('O heroi ${this.tipo} atacou usando ${ataque}') ;
    }
}

    




    
        
    
    