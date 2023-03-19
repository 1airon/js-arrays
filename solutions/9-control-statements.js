// BEGIN
const getTotalAmount = (massive, nameCurrency) => {
    let sum = 0;
    for (let massiveElement of massive) {
        if (massiveElement.split(' ')[0] == nameCurrency){
            sum += +massiveElement.split(' ')[1];
        }
    }
    return sum;
}
export default getTotalAmount;
// END