// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = (valor) => {
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = (valor) => {
    this.saldo += valor;
    this.verSaldo();
} 

Conta.prototype.verSaldo = () => {
    console.log(
        `Ag/c:${this.agencia}/${this.conta} |` + `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

const conta1 = new Conta(11, 22, 10)