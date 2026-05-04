export function randomDC() {
    const min = Math.ceil(2);
    const max = Math.ceil(12);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomDiceValue() {
    const min = Math.ceil(1);
    const max = Math.ceil(6);

    const dice1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const dice2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const total = dice1 + dice2;
    return [dice1, dice2, total];
}