var Cliente = (function () {
    function Cliente(nome, email, telefone, whatsapp, instagram, linkedin, senha, categoria) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.whatsapp = whatsapp;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.senha = senha;
        this.categoria = categoria;
    }
    return Cliente;
}());
var Cliente1 = new Cliente("Ismael", "paonamortandela@gmail.com", "(41) 3937-2993", "(41) 99114-7525", "@pedro_stu", "Pedro Franceschi", "20NkQNw9qF", [""]);
console.log(Cliente1);
