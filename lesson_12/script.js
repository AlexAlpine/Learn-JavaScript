// ! Functions

// функции позволяют переиспользовать написанный код
// если нужно, ты можно создать функцию, которую можно будет использовать с разными данными
// функции помогают организовать и структурировать код

// важная часть функции - return
// в нем мы указываем то, что функция 'произведет' или вернет (поэтому и return)
// такое возвращенное значение можно забрать из функции и использовать дальше в программе
// если у функции нет возвращенного значения - она возвращает undefined

// * объявление функции через ключевое слово function

// такие функции могут быть вызваны до объявления
// это называется hoisting - поднятие
// helloWord("earth");

// объявление функции
function helloWord(value) {
  // если не написать return мы не сможем забрать данные из функции
  return `hello, ${value}!`;
}

const helloSun = helloWord("sun");

// console.log("helloSun ===> ", helloSun);

// call - вызов функции с разными аргументами
// аргументы приходят заместо параметра в круглые скобки

// helloWord("earth");
// helloWord("sun");
// helloWord("people");

// * объявление функции через переменную - function expression
// такие функции кладутся в переменную и обладают ее свойствами
// их нельзя вызвать до инициализации переменной

// const helloByeWord = function (word1, word2) {
//   console.log("hello, ", word1, "!");
//   console.log("bye, ", word2, "....");
// };

// helloByeWord("sun", "moon");
// вызов функции с двумя параметрами
// важен порядок аргументов - значений внутри скобок

// * стрелочная функция
// arrow function

// объявление стрелочной функции
// называется так из-за знака '=>'
// если выражение можно уместить в одну строку - стрелочным функциям не нужен return
const multiply = (a, b, c) => a * b * c;

function multiply1(a, b, c) {
  return a * b * c;
}

const result = multiply(2, 2, 3);
const result1 = multiply1(2, 2, 3);

// console.log(result);
// console.log(result1);

// если действие в теле функции не уместить в одну строку то мы добавляем фигурные скобки
// в таком случае для работы с возвращенным значением обязателен return

const calculate = (a, b, c) => {
  let value = a * b * c;
  let result = `это ответ: ${value}`;
  return result;
};

const result3 = calculate(3, 5, 3);
// console.log(result3);

// ! Методы массивов

const brothers = [
  { name: "Legolas", height: 190, race: "elf", age: 500, hasMagic: true },
  { name: "Aragorn", height: 180, race: "human", age: 50, hasMagic: false },
  { name: "Ghimli", height: 50, race: "dwarf", age: 200, hasMagic: false },
  { name: "Gendalf", height: 200, race: "magician", age: 2000, hasMagic: true },
  { name: "Frodo", height: 100, race: "hobbit", age: 30, hasMagic: false }
];

let sam = { name: "Sam", height: 105, race: "hobbit", age: 33, hasMagic: false };

// добавили Сэма в конец массива
brothers.push(sam);

// создали копию и положили в новую переменную
const newBrothers = [...brothers];

// удалили элемент из начала массива
newBrothers.shift();

// * map()
// не мутирующий - не изменяет исходный массив
// метод возвращает новый массив, с кол-вом элементов исходного
// метод нужен для создания нового массива на основании исходного
// метод итерируется по элементам исходного массива

// 1 создаем массив строк с именами братьев
const brothersNames = brothers.map(brother => brother.name);

console.log(brothersNames);

// 2 создаем массив числе с возрастом братьев
const brothersAges = brothers.map(el => el.age);

console.log(brothersAges);

// 3 создаем массив строк с именами и возрастом братьев
const brothersNamesAndAges = brothers.map(brother => brother.name + " " + brother.age);

console.log(brothersNamesAndAges);

// * Создайте массив только высоких братьев (больше 170 height)
// время до 19:33

// * forEach()
// метод, который поочередно совершает действия с исходным массивом
// метод мутирующий - изменяет исходный массив
// возвращенное значение - undefined

const tallBrothers = [];

brothers.forEach(brother => {
  if (brother.height > 170) {
    tallBrothers.push(brother);
  }
});

// мы увеличили возраст героев на 1 в исходном массиве
const result4 = brothers.forEach(brother => (brother.age += 1));

console.log(brothers);
console.log(result4);

// * filter()
// не мутирующий
// возвращает новый массив элементов удовлетворяющих условию
// если такой элемент 1 вам придет один элемент в массиве
// если таких элементов нет - придет пустой массив

// создаем новый массив с героями старше 100 и обладающими магией
console.log(brothers.filter(el => el.age > 100 && el.hasMagic === true));

// в ответ придет пустой массив
console.log(brothers.filter(el => el.age > 3000));

// * find()
// не мутирующий
// возвращает первый элемент удовлетворяющий условию

const magician = brothers.find(brother => brother.race === "hobbit");
console.log(magician);

// * reduce()
// не мутирующий
// используется для поочередных операций с элементами массива
// чаще всего это числовое или строковое значения

let sum = 0;

for (let i = 0; i < brothersAges.length; i++) {
  sum += brothersAges[i];
}

console.log(sum);

// та же самая задача с reduce
// метод принимает в себя стрелочную функцию и начальное значение для переменной-аккумулятора
// acc - это аккумулируемое значение
// current - текущее значение
// к первому мы добавляем второе на каждой итерации

console.log(brothersAges);
let sum2 = brothersAges.reduce((acc, current) => acc + current, 1000);

console.log(sum2);
