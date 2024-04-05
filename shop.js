let bank = 1000;
let beerCount = 100;
let winoCount = 50;
let pepsiCount = 80;
const beerPrice = 40;
const winoPrice = 200;
const pepsiPrice = 20;

export function checkBank() {
    return `Bank: ${bank}`;
}

export function checkStorageBeer() {
    return `Beer count = ${beerCount}`;
}

export function sellBeer(countB) {
    if (!isNaN(countB) && countB >= 0 && countB <= beerCount) {
        beerCount -= countB;
        bank += countB * beerPrice;
        return { quantity: countB, total: countB * beerPrice };
    }
    else if (countB > beerCount) {
        console.log(`you cannot order ${countB} bottles beer because there is only ${beerCount} bottles beer`);
    }
    return { quantity: 0, total: 0 };
}

export function checkStorageWino() {
    return `Wino count = ${winoCount}`;
}

export function sellWino(countW) {
    if (!isNaN(countW) && countW >= 0 && countW <= winoCount) {
        winoCount -= countW;
        bank += countW * winoPrice;
        return { quantity: countW, total: countW * winoPrice };
    }
    else if (countW > winoCount) {
        console.log(`you cannot order ${countW} bottles wino because there is only ${winoCount} bottles wino`);
    }
    return { quantity: 0, total: 0 };
}

export function checkStoragePepsi() {
    return `Pepsi count = ${pepsiCount}`;
}

export function sellPepsi(countP) {
    if (!isNaN(countP) && countP >= 0 && countP <= pepsiCount) {
        pepsiCount -= countP;
        bank += countP * pepsiPrice;
        return { quantity: countP, total: countP * pepsiPrice };
    }
    else if (countP > pepsiCount) {
        console.log(`you cannot order ${countP} bottles pepsi because there is only ${pepsiCount} bottles pepsi`);
    }
    return { quantity: 0, total: 0 };
}