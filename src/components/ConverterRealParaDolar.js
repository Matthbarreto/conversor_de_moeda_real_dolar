import styles from './historico.css'
import img from './dolar.gif'

function ConverterRealParaDolar() {
    return (
        <div className="botao">
            <button onClick={Eventos}>Converter</button>
        </div>
    )

    function Eventos() {
        var valorEmReal = document.querySelector("#valorEmReal").value;
        var historico = document.querySelector(".resultados");
        var dataHoje = new Date();
        var dia = String(dataHoje.getDate()).padStart(2, '0');
        var mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
        var ano = String(dataHoje.getFullYear());
        var hora = String(dataHoje.getHours()).padStart(2, '0');
        var minutos = String(dataHoje.getMinutes()).padStart(2, '0');
        var segundos = String(dataHoje.getSeconds()).padStart(2, '0');
        var formatado = `${dia}/${mes}/${ano} <br> ${hora}:${minutos}:${segundos}`;
        var dataInicial = '04-03-2023';
        var dataFinal = `${dataHoje.getMonth() + 1}-${dataHoje.getDate()}-${dataHoje.getFullYear()}`;
        var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='" + dataInicial + "'&@dataFinalCotacao='" + dataFinal + "'&$top=1&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,dataHoraCotacao";

        if (valorEmReal == "") {
            historico.innerHTML = `<div id="notifica">
            <span id="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            Digite algum valor para prosseguir!
            </div>`
        } else {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    var cotacaoCompra = parseFloat(data.value[0].cotacaoCompra);
                    var valorEmDolar = valorEmReal / cotacaoCompra;

                    historico.innerHTML +=
                        `
                <div class="cada">
                    <div class="img">
                        <img src=${img} alt="Conversor de real para dolar">
                    </div>
                    <div class="texto">
                        <h4>${valorEmReal} reais convertidos para o dólar a uma cotação de ${cotacaoCompra} é:</h4>
                        <h2>$ ${valorEmDolar.toFixed(2)}</h2>
                        <a href="https://www.bcb.gov.br/estabilidadefinanceira/fechamentodolar" target="_blank">Fonte: Banco central do Brasil</a>
                        <div class="hora">
                            <span>Data da cotação: <br> ${formatado}</span>
                        </div>
                    </div>
                </div>
        `
                });

            document.querySelector("form").reset();

        }
    }
}

export default ConverterRealParaDolar;