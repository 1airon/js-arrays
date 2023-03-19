const _ = require("lodash"); 

// BEGIN
const getSameCount = (firstMassive, secondMassive) => {
    let set = new Set(_.intersection(firstMassive, secondMassive));
    let newMassive = Array.from(set)
    return newMassive.length;
}
export default getSameCount;
// END