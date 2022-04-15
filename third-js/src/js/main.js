// let age =  prompt('How old are you?');


// switch (true) {
//     case (age >= 0 && age <= 11):
//         console.log('You are baby');
//         break;
//     case (age >=12 && age <= 17):
//         console.log('You are teen');
//         break;
//     case (age >= 18 && age <=59):
//         console.log ('You are adult');
//         break;
//     case (age >=60 && age <= 100):
//         console.log('You are retired');
//         break;
//     default:
//         console.log('Error');
//         break;        
// }

// let number = prompt('Введіть число від 1 до 9')

// switch (number) {
//     case '1':
//         console.log('!')
//         break;
//     case '2':
//         console.log('@');
//         break;
//     case '3':
//         console.log('#');
//         break;
//     case '4':
//         console.log('$');
//         break;
//     case '5':
//         console.log('%');
//         break;
//     case '6':
//         console.log('^');
//         break;
//     case '7':
//         console.log('&');
//         break;
//     case '8':
//         console.log('*');
//         break;
//     case '9':
//         console.log('(');
//         break;
//     default:
//         console.log('Error');
//         break;    
// }

let price = prompt('Введіть суму покупки');

switch (price) {
    case (price >= 200 && price <= 300):
        console.log('Ваша знижка 3%');
        break;
    case (price >= 300 && price <= 500):
        console.log('Ваша знижка 5%');
        break;
    case (price >= 500):
        console.log('Ваша знижка 7%');
        break;
    default:
        console.log('Error');
        break;            
}
