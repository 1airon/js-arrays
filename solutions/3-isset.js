// BEGIN
export const get = (massive, index, basic = null) => {
    if (index >= 0 && index < massive.length)
    {
    return massive[index]}
    else {
        return basic};
}
// END