// BEGIN
const getSameParity = (massive) => {
    let newMassive = [];
    let pariry = Math.abs(massive[0] % 2);
    for (let massiveElement of massive) {
        if (Math.abs(massiveElement % 2) == pariry){
            newMassive.push(massiveElement);    
        }

    }
    return newMassive;
}
export default getSameParity;
// END