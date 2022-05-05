// Напиши всі можливі варіанти створення функцій.

function func() {
    alert('Hello!')
};

func();

let name = function() {
    alert('I am glad to see you')
};

name();

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function arg (Jon, Enakin, Pol) {
    alert('Кількість аргументів: ' + arg.length);    
}

arg();

//Напиши функцію, яка приймає 2 числа і повертає :
//-1, якщо перше число менше, ніж друге; 
//1 - якщо перше число більше, ніж друге; 
//0 - якщо числа рівні.

function number(a,b) {
    if(a<b){
        return -1;
    }else if (a > b) {
        return 1;
    } else{
        return 0;
    };    
};

console.log(number(1,5));
console.log(number(9,5));
console.log(number(3,3));

number();

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  };

console.log(factorial(3));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
function getNumber() {
    let a = prompt('Enter first number');
    let b = prompt('Enter second number');
    let c = prompt('Enter third number');

    let d = a + b + c;
    console.log(d);
}
getNumber();
