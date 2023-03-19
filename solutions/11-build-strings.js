// BEGIN
const buildDefinitionList = (massive) => {
    if (massive.length == 0 || massive[0].length == 0) {
    return '';
    }
    let tag = '<dl>';
    for (let massiveElement of massive) {
        tag += `<dt>${massiveElement[0]}</dt><dd>${massiveElement[1]}</dd>`
    }
    tag += '</dl>'
    return tag;
}
export default buildDefinitionList;
// END