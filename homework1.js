// Напишите функцию которая принимает имя(string)
// и выводит в консоль "Hello " + "имя"

function sayHello(userName) {
    console.log('Hello', (userName));
}

sayHello('Terminator');

// Напишите функцию которая принимает число(number)
// возвращает(return) число умноженое на 10

function increase(number) {
    return number * 10
}

function printIncreaseNumber(number) {
    console.log(increase(number));
}

printIncreaseNumber(10);
printIncreaseNumber(20);
printIncreaseNumber(30);

// Напишите функцию которая выводит в консоль 
// все значения свойств данного объекта
const myCar = {
    make: 'Honda',
    model: 'Civic',
    info: {
        color: 'red',
        mileage: 10000,
        isPopular: true
    },
    year: 2020
    }  
function printMileage(myCar) {
    myCar.info.mileage;
}
printMileage(myCar);

// Напишите функцию которая увеличит свойство mileage
// на 5000, используйте объект myCar\

function increaseMileage(car) {
    car.info.mileage += 5000;
}

console.log(myCar.info.mileage);
increaseMileage(myCar);
console.log(myCar.info.mileage);