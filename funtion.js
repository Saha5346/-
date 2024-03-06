function getPositiveNumbers(arr) {
    // Используем метод filter для создания нового массива,
    // в котором будут только положительные числа из исходного массива.
    return arr.filter(num => num > 0);
}

// Пример использования функции:
const array = [-1, -2, 0, 4, -23, 45];
const positiveNumbers = getPositiveNumbers(array);
console.log(positiveNumbers); // Вывод: [4, 45]