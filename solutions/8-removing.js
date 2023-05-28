// BEGIN
const getSameParity = (massive) => {
    if (massive.length === 0) {
      return [];
    }
  
    const result = [];
    const firstNumber = massive[0];
    const isEven = firstNumber % 2 === 0;
  
    for (let i = 0; i < massive.length; i++) {
      if (Math.abs(massive[i]) % 2 === 0 === isEven) {
        result.push(massive[i]);
      }
    }
  
    return result;
  }

  export default getSameParity;
// END