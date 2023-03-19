// BEGIN
export const getMax = (massive) => {
    if(massive.length == 0) return null;
    let max = massive[0];
    for (let massiveElement of massive) {
        if(massiveElement >= max) {
            max = massiveElement;
        }
    }
    return max;
}
// END