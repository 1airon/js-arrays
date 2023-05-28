// BEGIN
export const reverse = (massive) => {
    const lastIndex = massive.length - 1;
    const middleIndex = Math.floor(massive.length / 2);
  
    for (let i = 0; i < middleIndex; i++) {
      const temp = massive[i];
      massive[i] = massive[lastIndex - i];
      massive[lastIndex - i] = temp;
    }
}
// END