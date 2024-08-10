    class Filme {
    nome: string;
    categoria: string;
    duracao: number;
    atores: Array<string>;
}

const starWars = new Filme();
starWars.nome = "Star Wars";
starWars.categoria = "Drama";
starWars.duracao = 180;
starWars.atores = [
    "Bruce Wayne",
    "Mulher Maravilho",
    "Thanos"
]
//console.log(starWars);


class Aluno{
    nome: string
    nota1: number
    nota2: number
    nota3: number

    constructor(nome: string, nota1: number, nota2: number, nota3: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calcularMedia() : number {
            return(this.nota1 + this.nota2 + this.nota3) / 3;
    }
    let victor: Aluno = new Aluno("Victor", 0, 1.5, 10);
    victor.nota2 = 0;
    victor.nota3 = 0;
    let mediaVictor = victor.calcularMedia();

    let pedro: Aluno = new Aluno("Pedro", 5, 4, 9);

    console.log(victor);
    console.log(mediaVictor);
    console.log(pedro);
    console.log(pedro.calcularMedia);
    
}
