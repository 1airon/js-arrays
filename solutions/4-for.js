// BEGIN
const addPrefix = (massive, prefix) => {
    let newMassive = [];
    for(let massiveElement of massive) {
        let word = prefix + ' ' + massiveElement;
        newMassive.push(word);
    }
return newMassive;
}
export default addPrefix;
// END