//Criada essa função para Capturar o Valor dos Numeros Digitados
function pegarValores() {

  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  return [numero1, numero2];
}

// Essa Função Retorna os Valores nas Telas
function mostrarResultado(valor) {
  document.getElementById("resultado").innerText = valor;
}

// Essa Função Soma dois Numeros
function somar() {
  const [numero1, numero2] = pegarValores();
  mostrarResultado(numero1 + numero2);
}
// Essa Função Subtrai dois Numeros
function subtrair() {
  const [numero1, numero2] = pegarValores();
  mostrarResultado(numero1 - numero2);
}

// Essa Função Multiplica dois Numeros
function multiplicar() {
  const [numero1, numero2] = pegarValores();
  mostrarResultado(numero1 * numero2);
}

// Essa Função Divide dois Numeros
function dividir() {
  const [numero1, numero2] = pegarValores();
  if (numero1 === 0) {
    mostrarResultado("Erro: divisão por zero!");
  } else {
	  //aqui realizo uma tratativa para trazer apenas dois numeros após a casa decimal
    mostrarResultado((numero1 / numero2).toFixed(2));
  }
}