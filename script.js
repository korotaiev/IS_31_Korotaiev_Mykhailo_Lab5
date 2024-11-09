// TASK 1
console.log("************** TASK1 **************");
let quantity = 4;
let pricePerDroid = 50;
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(`quantity = ${quantity}`);
console.log(`pricePerDroid = ${pricePerDroid}`);
console.log(makeTransaction(quantity, pricePerDroid));

// TASK 2
console.log("************** TASK2 **************");
function checkForSpam(message) {
  const lowerCaseMeasssge = message.toLowerCase();
  return (
    lowerCaseMeasssge.includes("spam") || lowerCaseMeasssge.includes("sale")
  );
}
console.log(checkForSpam("Get your free SPAM offer now!"));
console.log(checkForSpam("Huge SALE on all items!"));
console.log(checkForSpam("This is a regular message."));

// TASK 3
console.log("************** TASK3 **************");
const numbers = [3, 4, 19, 44, 10, 5, 37, 15, 20, 25];
const value = 20;
let filteredNumbers = [];
function filterArray(numbers, value) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
}
filterArray(numbers, value);
console.log("Initial array:");
console.log(numbers);
console.log("Filterd array:");
console.log(filteredNumbers);

// TASK 4

console.log("************** TASK4 **************");
const arrayLength = prompt("Введіть кількість елементів у масиві:");
let userArray = createArray(arrayLength);
console.log("Вхідний масив:", userArray);
const maxEven = findMaxEven(userArray);
console.log("Максимальний елемент серед парних:", maxEven);
const minEvenIndex = findMinEvenIndex(userArray);
console.log("Мінімальний серед елементів з парними індексами:", minEvenIndex);
swapElements(userArray, maxEven, minEvenIndex);
console.log("Масив після обміну:", userArray);
insertionSort(userArray);
console.log("Відсортований масив:", userArray);

function createArray(length) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    let pseudoRandomNumber = (i * 37 + 51) % 100;
    arr.push(pseudoRandomNumber);
  }

  return arr;
}
function findMaxEven(arr) {
  let maxEven = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (maxEven === null || arr[i] > maxEven) {
        maxEven = arr[i];
      }
    }
  }
  return maxEven;
}
function findMinEvenIndex(arr) {
  let minEvenIndex = null;
  for (let i = 0; i < arr.length; i += 2) {
    if (minEvenIndex === null || arr[i] < minEvenIndex) {
      minEvenIndex = arr[i];
    }
  }
  return minEvenIndex;
}
function swapElements(arr, firstValue, secondValue) {
  const firstIndex = arr.indexOf(firstValue);
  const secondIndex = arr.indexOf(secondValue);
  if (firstIndex !== -1 && secondIndex !== -1) {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  }
}
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// TASK 5
console.log("************** TASK5 **************");
function validateForm() {
  const errorMessages = [];
  const errorDisplay = document.getElementById("errorMessages");
  errorDisplay.innerHTML = "";

  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const salary = document.getElementById("salary").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username) errorMessages.push("Ім'я користувача є обов'язковим.");
  if (!age) errorMessages.push("Поле 'Вік' є обов'язковим.");
  if (!salary) errorMessages.push("Поле 'Зарплата' є обов'язковим.");
  if (!dob) errorMessages.push("Поле 'Дата народження' є обов'язковим.");
  if (!password) errorMessages.push("Поле 'Пароль' є обов'язковим.");
  if (!confirmPassword)
    errorMessages.push("Поле 'Повторіть пароль' є обов'язковим.");

  if (
    age &&
    (isNaN(age) || !Number.isInteger(Number(age)) || Number(age) <= 0)
  ) {
    errorMessages.push("Поле 'Вік' має бути додатним цілим числом.");
  }

  if (salary && (!isFinite(salary) || Number(salary) <= 0)) {
    errorMessages.push("Поле 'Зарплата' має бути додатним дійсним числом.");
  }

  if (dob) {
    const parts = dob.split(".");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const isDateValid =
      parts.length === 3 &&
      !isNaN(day) &&
      !isNaN(month) &&
      !isNaN(year) &&
      day > 0 &&
      day <= 31 &&
      month > 0 &&
      month <= 12 &&
      year > 1900 &&
      year <= new Date().getFullYear();

    const date = new Date(year, month - 1, day);

    if (
      !isDateValid ||
      date.getDate() !== day ||
      date.getMonth() + 1 !== month ||
      date.getFullYear() !== year
    ) {
      errorMessages.push(
        "Поле 'Дата народження' має бути у форматі DD.MM.YYYY."
      );
    }
  }

  if (password && confirmPassword && password !== confirmPassword) {
    errorMessages.push("Паролі не співпадають.");
  }

  if (errorMessages.length > 0) {
    errorDisplay.innerHTML = errorMessages.join("<br>");
    return false;
  }

  errorDisplay.innerHTML = "";
  return true;
}
