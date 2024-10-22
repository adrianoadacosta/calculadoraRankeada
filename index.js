/** @format */

// Função para calcular o saldo de vitórias e determinar o nível
function calcularRankeadas(vitorias, derrotas) {
	// Calcula o saldo de vitórias
	const saldoVitorias = vitorias - derrotas;

	// Variável para armazenar o nível do jogador
	let nivel;

	// Estrutura de decisão para determinar o nível baseado no saldo de vitórias
	if (saldoVitorias < 10) {
		nivel = 'Ferro';
	} else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
		nivel = 'Bronze';
	} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
		nivel = 'Prata';
	} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
		nivel = 'Ouro';
	} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
		nivel = 'Diamante';
	} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
		nivel = 'Lendário';
	} else if (saldoVitorias >= 101) {
		nivel = 'Imortal';
	}

	// Retorna a mensagem com o saldo de vitórias e o nível do jogador
	return `O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`;
}

// Exemplo de uso
const vitorias = 50;
const derrotas = 20;

const resultado = calcularRankeadas(vitorias, derrotas);
console.log(resultado);
