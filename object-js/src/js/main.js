function Car(production, model, year, averageSpeed, fuelTank, fuelPer100) {
    this.production = production;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
    this.fuelTank = fuelTank;
    this.fuelPer100 = fuelPer100;
};

let slavuta = new Car('ZAZ', '1103-Slavuta', 2007, 140, 38, 7);

console.log(slavuta);

//водії які можуть керувати авто
slavuta.drivers = {
    Bogdan: true,
    Tolya: false
};

console.log(slavuta.drivers.Bogdan);

//інформація про авто
for (let key in slavuta) {
    console.log(`${key} = ${slavuta[key]}`);
};

//перевірка водіїв
function canDrive() {
    let driverName = prompt('Введіть ваше імя!');

    if (driverName == 'Bogdan') {
        alert('Welcome to ZAZ');
    } else {
        alert('Аяяяй!');
    };
};

canDrive();

//розрахувати час, необхідний для досягнення пункту призначення 
let distance = +prompt('Введыть дистанцію(в кілометрах)');

function calcTime() {
    let avSpeed = slavuta.averageSpeed;
    let time = distance / avSpeed;

    if (time >= 4) {
        alert(`Трішки відпочинь. Ти прибудеш до пункту призначення в${Math.trunc(time + 1)} годин.`);
    } else {
        alert(`Ти прибудеш до пункту призначення в ${Math.trunc(time)} годин.`);
    };
};

calcTime();

//коли потрібно заправляти авто
function needFuel() {
    let maxFuel = slavuta.fuelTank;
    let minFuel = slavuta.fuelPer100;
    let needLitres = (distance / 100) * minFuel;

    if (needLitres > maxFuel) {
        alert('Здається час підзаправитися');
    };
};

needFuel();
