

// BEGIN
const getSuperSeriesWinner = (massive) => {
let canada = 0;
let ussr = 0;
for (let massiveElement of massive) {
    let ca = massiveElement[0]
    let uss = massiveElement[1]
    if(ca > uss) {
        canada += 1
    }
    else if (ca < uss) {
        ussr += 1
    };
}
if (canada > ussr){
    return 'canada'
}
else if (ussr > canada) {
    return 'ussr'}
    else {
        return null
    }
}
export default getSuperSeriesWinner;
// END