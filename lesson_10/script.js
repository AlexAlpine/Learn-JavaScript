// console.log("hello, js!");

// объявили переменную через ключевое слово let
let student;
// если переменной не присвоено значение, то она равна undefined (переводится как 'не определено')

// * если переменная объявлена с помощью let - значение можно переопределить

student = "Alla";
student = "Olga";

// console.log(student);

// * если переменная объявлена с помощью const - значение нельзя переопределить

const language = "JavaScript";
// ! language = 'Java' - так сделать с const не получится

// * примитивные типы данных в JS

// 1. string - строка

let planet = "Earth";
planet = "Mercury";
planet = `Mars`;
// console.log(planet);

// 2. number - число

let n1 = 42;
let p = 3.14;
let coldNumber = -41;

let lastSafeNumber = Number.MAX_SAFE_INTEGER;

// console.log(lastSafeNumber);

// 3. bigint - большое число (для чисел больше, чем Number.MAX_SAFE_INTEGER

let bigNumber = 9n;

// 4. boolean - булевое значение
// логическое значение true / false

let isStudent = true;
let isBackend = false;

// 5. undefined - неопределенный тип данных

let nothing = undefined;
let smth;
// console.log(nothing);
// console.log(smth);

// 6. null
// typeof вернет object
// null это ничего, но явно определенное

let nothing2 = null;

// 7. Symbol

let s1 = Symbol("smth");
// console.log(s1);

// NaN - Not A Number - не отдельный тип данных, а специальное значение - результат невыполнимых математических операций
// тип NaN будет number, что я признается создателями js ошибкой..

let notANumber = 3 + nothing;

// * мы будем работать прежде всего с string, number, boolean, undefined, null

// ? операции с данными в JS

// * приведение типов

// преобразование к строкам
// мы можем привести число к строки с помощью String()
// преобразование с помощью конструктора

let sum = 2 ** 2;
let sum1 = String(sum);

// также способом преобразования является добавление пустой строки
let sum2 = sum + "";
// console.log(typeof sum2);

// console.log(sum);
// console.log(sum1);

// не явное приведение к строке через сложение числа и строки
sum = sum + "number";

// console.log(sum);

// преобразование к числам
// через конструктор Number()

let result = 5 + 10 + Number("32") + 1;

// console.log(result);

// Number() не сработает со строкой, у которой есть символ не переводимый в число - он вернет NaN
// если мы хотим более универсальный метод то можем воспользоваться parseInt(), который переведет строку в число до непереводимого символа

let value = parseInt("1000€");

// можно привести к числу строку написав до него математический символ '+'
let value1 = +"2000";

// логические преобразования в булевое значения
// 0 - это false, 1 - true, минусовое число также будет true
// пустая строка - false
// любая строка с большим, чем '' ко-вом символов - true
// NaN - false

let b1 = Boolean('');
console.log(b1);

// * операторы

// - арифметические

let v1 = 12 + 48
let v2 = 50 - 49
let v3 = 2 * 2 // умножение
let v4 = 2 ** 5 // возведение в степень
let v5 = 9 % 4 // остаток от целочисленного деления
let v6 = 8 / 4

console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);


// - операторы сравнения

// >, <, ===, ==, !==, >=, <=

// === - это оператор точного равенства, вернет true если утверждение верно

let age = '25'

// == - это странное равенство с приведением типов, 25 будет равно '25'
// ленивое равенство, приводящее число в строку

console.log(25 == age);