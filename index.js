// Função 1: Soma dois números
function somar(a, b) {
  return a + b;
}

// Função 2: Subtrai dois números 
function subtrair(a, b) {
  return a - b; 
}

// Função 4: Concatena dois textos 
function juntarTexto(texto1, texto2) {
  return texto1 + "" +texto2; 
}

// Função 3: Verifica se um número é par
function ehPar(n) {
  return n % 2 === 0;
}


// Testes
console.log("Soma de 5 + 3 =", somar(5, 3));                // Esperado: 8
console.log("Subtração de 10 - 4 =", subtrair(10, 4));      // Esperado: 6
console.log("8 é par?", ehPar(8));                          // Esperado: true
console.log("Juntar 'Olá' e 'mundo':", juntarTexto("Olá", "mundo")); // Esperado: 'Olá mundo'