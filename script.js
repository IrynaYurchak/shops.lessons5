function counter() {
    let q = 0;
    return function sum(step) {
        q = q + step;
        console.log('Count = ', q);
    }
}

let fn = counter();
fn(3);
fn(5);
fn(228);

// task2
console.log('task2: shop')

const shop = (function () {
    // let bank = 1000;
    // let beerCount = 100;
    // let winoCount = 50;
    // let pepsiCount = 80;
    // let beerPrice = 40;
    // let winoPrice = 200;
    // let pepsiPrice = 20;

    // function checkBank() {
    //     return `Bank: ${bank}`;
    // }

    // function checkStorageBeer() {
    //     return `Beer count = ${beerCount}`;
    // }

    // function sellBeer(countB) {

    //     if (!isNaN(countB) && countB >= 0 && countB <= beerCount) {
    //         beerCount -= countB;
    //         bank += countB * beerPrice;
    //         return { quantity: countB, total: countB * beerPrice };
    //     }
    //     else if (countB > beerCount) {
    //         console.log(`you cannot order ${countB} bottles beer because there is only ${beerCount} bottles beer`)
    //     }
    //     return { quantity: 0, total: 0 };
    // }

    // function checkStorageWino() {
    //     return `Wino count = ${winoCount}`;
    // }

    // function sellWino(countW) {

    //     if (!isNaN(countW) && countW >= 0 && countW <= winoCount) {
    //         winoCount -= countW;
    //         bank += countW * winoPrice;
    //         return { quantity: countW, total: countW * winoPrice };
    //     }
    //     else if (countW > winoCount) {
    //         console.log(`you cannot order ${countW} bottles wino because there is only ${winoCount} bottles wino`)
    //     }
    //     return { quantity: 0, total: 0 };
    // }

    // function checkStoragePepsi() {
    //     return `Pepsi count = ${pepsiCount}`;
    // }

    // function sellPepsi(countP) {

    //     if (!isNaN(countP) && countP >= 0 && countP <= pepsiCount) {
    //         pepsiCount -= countP;
    //         bank += countP * pepsiPrice;
    //         return { quantity: countP, total: countP * pepsiPrice };
    //     }
    //     else if (countP > pepsiCount) {
    //         alert(`you cannot order ${countP} bottles pepsi because there is only ${pepsiCount} bottles pepsi`)
    //     }
    //     return { quantity: 0, total: 0 };
    // }

    // return {
    //     bank: checkBank,
    //     storageBeer: checkStorageBeer,
    //     sellBeer: sellBeer,
    //     storageWino: checkStorageWino,
    //     sellWino: sellWino,
    //     storagePepsi: checkStoragePepsi,
    //     sellPepsi: sellPepsi
    // }
})();

import * as myShop from './shop.js';

console.log(myShop.checkBank());// Каса
console.log(myShop.checkStorageBeer());
console.log(myShop.sellBeer(10)); // Продати 10 пляшок пива
console.log(myShop.checkStorageBeer()); // Перевірити залишок пива після продажу
console.log(myShop.checkStorageWino());
console.log(myShop.sellWino(5)); // Продати 5 пляшок вина
console.log(myShop.checkStorageWino()); // Перевірити залишок вина після продажу
console.log(myShop.checkStoragePepsi());
console.log(myShop.sellPepsi(8)); // Продати 8 пляшок Pepsi
console.log(myShop.checkStoragePepsi()); // Перевірити залишок Pepsi після продажу
console.log(myShop.checkBank());// Перевірити баланс в касі після продажів