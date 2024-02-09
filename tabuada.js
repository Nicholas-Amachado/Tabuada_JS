//seleção de elementos
const form_controle = document.querySelector("#multiplicacao");
const valor = document.querySelector("#valor");
const numero = document.querySelector("#multiplicador");
const tabela_multiplicacao = document.querySelector("#tabela_multiplicacao");
const title_number = document.querySelector("#number_title");

//funções
const createTable = (number, valor) => {
  tabela_multiplicacao.innerHTML = ""; //APAGANDO OQUE TINHA NO ELEMENTO TABELA_MULTIPLICAÇÃO

  for (i = 1; i <= valor; i++) {
    const resultado = number * i;

    // console.log(number," x ", i ," = ", resultado);

    const template = ` <div class="row">
<div class="operacao">${number} x ${i} = </div>
<div class="resultado">${resultado}</div>
</div>`;

    const parser = new DOMParser(); //a var recebe um obj que transfere nosso js para html

    const htmlTemplate = parser.parseFromString(template, "text/html"); //essa variavel é usada para receber a conversao da string para o html

    //PARSER É A INSTANCIA DO OBJETO DOMParser

    //parserFromString é um método do parser que analisa a string e retorna um DOM(ESTRUTURA HTML)

    //TEMPLATE É A VAR QUE CONTEM O COD HTML QUE SERA USADO PARA CRIAR UM DOCUMENTO DOM

    //TEXT/HTML É O TIPO DE CONTEUDO QUE SERA ANALISADO

    const row = htmlTemplate.querySelector(".row"); //O ROW VAI RECEBER O ROW DA STRING QUE FOI CONVERTIDA

    tabela_multiplicacao.appendChild(row); // ROW FOI ADD A TABELA DO HTML DE MULTI
  }
  title_number.innerHTML = number;
};

//eventos

form_controle.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor_multiplicado = valor.value;
  const valor_quantidade = numero.value;

  createTable(valor_multiplicado, valor_quantidade);
});
