// BEGIN
export const calculateSum = (massive) => {
    let sum = 0;
    for (let massiveElement of massive) {
            if (massiveElement % 3 ==0) 
            {sum += massiveElement};

    }
    return sum;
}
// END