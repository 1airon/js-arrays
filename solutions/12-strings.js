// BEGIN
const makeCensored = (string, massive) => {
    let censored = [];
    for (let stringElement of string.split(' ')) {
        if (massive.indexOf(stringElement) != -1) {
            censored.push('$#%!');
        }
        else {
            censored.push(stringElement);
        }
        
    }
    return censored.join(' ');

}
export default makeCensored;
// END