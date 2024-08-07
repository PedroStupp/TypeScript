function exemplo01() {
    var nomeUsuario = "Bruce Wdaynee";
    var apelido = "Batman";
    var idade = 59;
    var patrimonio = 99999.99;
    var estaEmpregado = true;
    var filhoMarta = true;
    estaEmpregado = false;
    var estaEmpregadoTexto = convertBooleanParaString(estaEmpregado);
    var titulo = document.querySelector("h1");
    titulo.innerText = nomeUsuario;
    var paragrafo = document.querySelector("p");
    paragrafo.innerText = "    \n    Nome: ".concat(nomeUsuario, "\n    Apelido: ").concat(apelido, "\n    Idade: ").concat(idade, "\n    Patrimonio: ").concat(patrimonio, "\n    Empregado: ").concat(estaEmpregadoTexto, "\n    Filho Marta: ").concat(convertBooleanParaString(filhoMarta));
}
function convertBooleanParaString(valor) {
    if (valor) {
        return "Sim";
    }
    return "Não";
}
exemplo01();
