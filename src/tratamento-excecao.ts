function exemplo01(numero1: number, numero2: number) {
    if (numero2 === 0) {
        throw Error("Numero 2 não pode ser 0");
    }
    return numero1 / numero2;
}

function exemplo01() {
    try {
        console.log(dividir(32, 0));
        console.log("Deu boa");
    } catch (error) {
        //      console.log(error.message);
    }

    // console.log("Acabou a execução");
}

function calcularImc(peso: number, altura: number): number {
    if (peso <= 0) {
        throw Error("Peso invalido! Valor nao pode ser 0 ou negativo.")
    }

    if (peso >= 400) {
        throw Error("Peso invalido! Valor nao pode ser maior que 399")
    }

    if (altura <= 0) {
        throw Error("Altura invalida! Valor nao pode ser igual ou menor a 0")
    }

    if (altura >= 2.60) {
        throw Error("Altura invalida! valor nao pode ser acima de 2.60")
    }

    let imc = peso / (altura * altura);
    return imc;
}

try {
    console.log(calcularImc(570, 1.63));
} catch (error) {
    //   console.log(error.message);
}

//console.log("Obrigado");


exemplo01();

// function calcularIdade (AnoNascimento: number): number {

//     if (AnoNascimento <= 1900) {
//         throw Error ("Ano Invalido! Ano de nascimento não pode ser igual ou menor que 1900")
//     }
//     if (AnoNascimento >= 2024) {
//         throw Error ("Ano invalido! Ano de nascimento não pode ser igual ou maior que 2024")
//     }
//     const anoAtual = new Date().getFullYear();

//     let Idade = anoAtual - AnoNascimento;
//     return Idade;

// }
// try {
// console.log(calcularIdade(2000));
// } catch (error) {
//     console.log(error.message);    
// }

// function SalarioBruto (valorHora: number, horasTrabalhadas: number): number {


//     if (valorHora <= 0) {
//         throw Error ("Valor hora invalido! O valor hora nao pode ser zero ou menor");
//     }
//     if (valorHora >= 351) {
//         throw Error ("Valor hora invalido! O valor hora nao pode ser ultrapassar R$ 350,99")
//     }

//     let SalarioBruto = valorHora * horasTrabalhadas;
//     return SalarioBruto;

// }
// try {
//     console.log(SalarioBruto(25, 100));
// } catch (error) {
//     console.log(error.message);

// }




class AnoNascimentoAbaixoDoMinimoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "AnoNascimentoAbaixoDoMinimoError";
    }
}

class AnoNascimentoAcimaDoMinimoError extends Error {
    constructor(mensagem: number) {
        super(`Ano Nascimento inválidado! Valor deve ser abaixo de ${ano_maximo}`);
        this.name = "AnoNascimentoAcimaDoMinimoError";
    }
}

function calcularIdade(anoNascimento: number): number {
    if (anoNascimento < 1900) {
        throw new AnoNascimentoAbaixoDoMinimoError("Ano nascimento invalido! Valor deve ser acima de 1899")
    }

    let dataAtual: Date = new Date();
    let anoAtual: number = dataAtual.getFullYear();

    if (anoNascimento > anoAtual) {
        throw new AnoNascimentoAcimaDoMinimoError(anoAtual + 1);
    }

    let idade = anoAtual - anoNascimento;
    return idade;
}

try {
    let idade = calcularIdade(1030);
    console.log(`Idade: ${idade}`);
} catch (error) {
    if (error instanceof AnoNascimentoAbaixoDoMinimoError || error instanceof AnoNascimentoAcimaDoMinimoError) {
        console.log("Erro no campo de Ano de Nascimento:");
        console.error(error.message);
        console.error(error.name);
        console.error(error.stack);
    } else {
        console.log(error.message);
    }

}