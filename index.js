/* Desafio: Escrevendo as classes de um Jogo. 

Heróis: 
Gohan: tipo híbrido / poder - Masenko / idade: 12

Goku: tipo Super Saiyajin / poder - Kamehameha / idade: 24

Kuririn: tipo Terráqueo / poder - Kienzan / idade: 14 

Vegeta: tipo príncipe Saiyajin / poder - Galick Ho / idade: 37
*/

class Personagem { 
    constructor(nome, idade, tipo) { 
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.poder =  this.definirPoder(); // Chama o método definirPoder(), assim que o objeto é criado, para definir o poder automaticamente.
    }

    definirPoder() { 
        const poderes = { 
            "Goku": "Kamehameha", 
            "Gohan": "Masenko",
            "Kuririn": "Kienzan", 
            "Vegeta": "Galick Ho"
        };
        return poderes[this.nome] || "Poder desconhecido";
    }

    atacar() { // Método atacar
        const msg = `O ${this.tipo} atacou usando, ${this.poder}`;
        console.log(msg);

        return msg;
    }
}

// Exemplo de uso para verificação rápida / Criando Goku e chamando o ataque
const goku = new Personagem("Goku", 24, "Super Saiyajin");
goku.atacar();