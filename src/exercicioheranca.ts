// Classe base InstrumentoMusical
class InstrumentoMusical {
    nome: string;
    tipo: string;

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }

    tocar(): string {
        return "Tocando instrumento";
    }
}

// Subclasse Violao
class Violao extends InstrumentoMusical {
    constructor(nome: string) {
        super(nome, "cordas");
    }

    tocar(): string {
        return `Tocando o violão ${this.nome} com acordes suaves.`;
        
    }
}

// Subclasse Flauta com a nova propriedade material
class Flauta extends InstrumentoMusical {
    material: string;

    constructor(nome: string, material: string) {
        super(nome, "sopro");
        this.material = material;
    }

    tocar(): string {
        return `Tocando a flauta feita de ${this.material}.`;
    }
}

// Exemplos de uso
const meuViolao = new Violao("Yamaha");
console.log(meuViolao.nome);  // Saída: Yamaha
console.log(meuViolao.tipo);  // Saída: cordas
console.log(meuViolao.tocar());  // Saída: Tocando o violão Yamaha com acordes suaves.

const minhaFlauta = new Flauta("Moeck", "prata");
console.log(minhaFlauta.nome);  // Saída: Moeck
console.log(minhaFlauta.tipo);  // Saída: sopro
console.log(minhaFlauta.material);  // Saída: prata
console.log(minhaFlauta.tocar());  // Saída: Tocando a flauta feita de prata.
