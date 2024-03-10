function sumDiagonals(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum = sum + matrix[i][i] + matrix[i][matrix.length - 1 - i];
    }
// Для случая, если центральный элемент попадает в сумму 2 раза, а для этого стороны матрицы должны быть нечетной длины
    if (matrix.length % 2 != 0){
        index = matrix.length / 2;
        index = Math.floor(index);
        sum -= matrix[index][index];
    }
    return sum;
}

// Функция для чтения матрицы из консоли
function readMatrixFromConsole() {
    const readline = require('readline-sync');
    const size = parseInt(readline.question('Введите размер квадратной матрицы: '));

    const matrix = [];
    console.log('Введите элементы матрицы построчно:');
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const element = parseInt(readline.question(`Элемент [${i}][${j}]: `));
            row.push(element);
        }
        matrix.push(row);
    }
    console.log(matrix);
    return matrix;
}

const inputMatrix = readMatrixFromConsole();
const result = sumDiagonals(inputMatrix);
console.log(result);