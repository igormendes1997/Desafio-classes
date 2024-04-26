class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;
        
        // Determina o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou poder desconhecido';
                break;
        }
        
        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância de um herói ninja
const meuHeroi = new Heroi('Igor', 26, 'ninja');

// Realizando o ataque do herói
meuHeroi.atacar();  // Saída: O ninja atacou usando shuriken