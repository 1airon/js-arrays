// BEGIN
const countUniqChars = (string) => {
    let set = new Set(string.split(''));
    let newMassive = Array.from(set)
    return newMassive.length;
}
export default countUniqChars;
// END