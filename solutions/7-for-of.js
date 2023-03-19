// BEGIN
const calculateAverage = (massive) => {
    if (massive.length == 0){
        return null;
    }
    let sum = 0;
    for (let massiveElement of massive) {
            
        sum += massiveElement;

    }
    return sum / massive.length;
}
export default calculateAverage;
// END