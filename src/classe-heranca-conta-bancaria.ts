/* classe-heranca-exemplo-conta-bancaria.ts */
class ContaBancaria {
    /* Encapsulamento:
    - public: é possivel acessar métodos, propriedades em qualquer lugar, em classes filhas ou em objetos
    - protected: é possivel acessar métodos, propriedades na propria classe ou classes filhas
    - private: é possivel acessar métodos, propriedades na propria classe.
     */
    protected numeroConta: string;
    protected saldo: number;
    protected cliente: string;

    constructor(numeroConta: string, cliente: string) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("ERRO: Depósito não realizado, valor de depósito deve ser positivo.");
            return;
        }
        console.log(`Depositado: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo + valor}`);
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (this.validarValorNegativoSaque(valor) === false)
            return;


        if (valor > this.saldo) {
            console.log("ERRO: Saque não realizado, pois o saldo é insuficiente");
            return;
        }
        console.log(`Saque: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo - valor}`);
        this.saldo -= valor;

    }
    protected validarValorNegativoSaque(valor: number): boolean {
        if (valor <= 0) {
            console.log("ERRO: Saque não realizado, pois valor de saque deve ser positivo.");
            return false;
        }
    }



    public obterNomeCliente() {
        return this.cliente;
    }

    public apresentarDados() {

        console.log("Cliente: " + this.cliente + " Saldo: R$ " + this.saldo);
    }
}

class ContaCorrente extends ContaBancaria {
    private chequeEspecial: number;

    constructor(numeroConta: string, nome: string, sobrenome: string, score: number) {
        super(numeroConta, nome);
        // atualizando o nome do cliente com o nome completo (nome + sobrenome)
        this.cliente = `${nome} ${sobrenome}`;
        this.chequeEspecial = this.calcularChequeEspecial(score);
    }


    private calcularChequeEspecial(score: number): number {
        if (score >= 0 && score <= 150)
            return 0;
        else if (score <= 300)
            return 100;
        else if (score <= 500)
            return 500;
        else if (score <= 750)
            return 2500;
        else if (score <= 900)
            return 5000;
        else if (score <= 950)
            return 10000;
        else return Number.MAX_SAFE_INTEGER;
    }

    public override apresentarDados(): void {
        super.apresentarDados();
        console.log("Cheque Especial: " + this.chequeEspecial);
    }

    public override sacar(valor: number): void {
        if (super.validarValorNegativoSaque(valor) === false)
            return;

        if (valor > this.saldo + this.chequeEspecial) {
            console.log("ERRO: Saque não realizado, pois saldo + limite é insuficiente");
            return;
        }

        console.log(`Saque R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo -= valor}`);
        this.saldo -= valor;
    }
}



class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number;

    constructor(numero: string, taxaJuros: number) {
    super(numero, cliente);

        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros(): void {
        // Calcular a taxa de juros, pois o usúario informa 7,28 e para calcularmos o valor é necessário
        // transformar em 0,0
        let taxaJuros = this.taxaJuros / 100;
        // Calcular o valor do juros que receberá
        let juros = this.saldo * taxaJuros;
        // Atualizar o saldo com o juros
        this.saldo += juros;
    }
}

let score = 300;
let manuer = new ContaCorrente("1239", "Manuer", "Login", score);
manuer.sacar(98);
manuer.apresentarDados()

let contaPedro = new ContaPoupanca("A99", "Pedrinho", 7.28);
contaPedro.depositar(1000.00);
contaPedro.apresentarDados();

contaPedro.aplicarJuros();
contaPedro.apresentarDados();





