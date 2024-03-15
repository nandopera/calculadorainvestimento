class Carro {
    constructor(marca, modelo, valor) {
        this.marca = marca
        this.modelo = modelo
        this.valor = valor
    }
    apresentar() {
        return `${this.marca} ${this.modelo} que custa R$${this.valor}.`
    }
}

function calcularInvestimento() {
    let parcelas = parseFloat(document.getElementById('parcelas').value);
    let meses = parseFloat(document.getElementById('meses').value);
    let juros = parseFloat(document.getElementById('juros').value);

    let valorAcumulado = parcelas * meses;
    let jurosCompostos = valorAcumulado * (1 + juros / 100);

    const carros = [
        ...criarListaCarros()
    ];

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>O valor final do investimento é R$${jurosCompostos}.</p>`;

    for (const { marca, modelo, valor } of carros) {
        resultadoDiv.innerHTML += `<p>${valor < jurosCompostos ? 'Consegue' : 'Não consegue'} comprar o carro ${marca} ${modelo} que custa R$${valor}.</p>`;
    }
}

function criarListaCarros() {
    return [
        new Carro('vw', 'gol', 30000),
        new Carro('fiat', 'uno', 12000),
        new Carro('honda', 'civic', 100000),
        new Carro('porsche', 'cayman', 500000)
    ];
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularInvestimento();
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('resultado').innerHTML = '';
});
