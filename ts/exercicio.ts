class Cliente {
    nome: string;
    email: string;
    telefone: string;
    whatsapp: string;
    instagram: string;
    linkedin: string;
    senha: string;
    categoria: Array<string>

    constructor(nome: string, email: string, telefone: string, whatsapp: string, instagram: string, linkedin: string, senha: string, categoria: Array<string>) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.whatsapp = whatsapp;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.senha = senha;
        this.categoria = categoria;
    }

}
let Cliente1: Cliente = new Cliente("Ismael", "paonamortandela@gmail.com", "(41) 3937-2993", "(41) 99114-7525", "@pedro_stu", "Pedro Franceschi", "20NkQNw9qF", [""]);

console.log(Cliente1);

