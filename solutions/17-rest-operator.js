// BEGIN
export const getMax = (massive) => {
    if (massive.length === 0) {
      return null;
    }
  
    let max = massive[0];
  
    for (let i = 1; i < massive.length; i++) {
      if (massive[i] > max) {
        max = massive[i];
      }
    }
  
    return max;
  }
// END