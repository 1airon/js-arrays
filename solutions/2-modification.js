// BEGIN
export const swap = (massive) => {
    if (massive.length < 2) {
        return massive;
    }
    let first = massive[0];
    massive[0] = massive[massive.length -1];
    massive[massive.length -1] = first;
    return massive;
}
// END