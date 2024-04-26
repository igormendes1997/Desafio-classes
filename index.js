// Definir uma classe
class Heroi{
    constructor( nome, idade , tipo){
        this.nome = Igor;
        this.idade = 26;
        this.tipo = ninja;
        
    }
    // Realizar um ataque
    atacar(){
        let ataque;

        //Ataque com base no tipo do Herói
        switch (this.tipo){
            case "ninja":
                ataque = "usou shuriken" ;
                break;
                ataque= "atacaou" ;
                break;

        }

    console.log('O heroi ${this.tipo} atacou usando ${ataque}') ;
    }
}