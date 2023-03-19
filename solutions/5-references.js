// BEGIN
export const reverse = (massive) => {
let newMassive = [];
for (let i = massive.length - 1; i >= 0; i--) {
    newMassive.push(massive[i]);
}
for (let i = 0; i <= newMassive.length - 1; i++) {
    massive[i] = newMassive[i]
}
}
// END