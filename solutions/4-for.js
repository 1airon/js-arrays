// BEGIN
const addPrefix = (massive, prefix) => {
    let newMassive = [];
    for (let i = 0; i < massive.length; i++) {
        newMassive.push(`${prefix} ${massive[i]}`);
      }
return newMassive;
}
export default addPrefix;
// END