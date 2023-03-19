// BEGIN
const bubbleSort = (massive) => {
    for (let i = massive.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if (massive[j] > massive[j + 1]){
                let temporary = massive[j];
                massive[j] = massive[j + 1];
                massive[j + 1] = temporary;
            }
        }
    }
    return massive;
}
export default bubbleSort;
// END