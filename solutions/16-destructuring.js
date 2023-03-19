const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length == 0) return null;
  let minimal = 32852534345324347246753;
  let resultPoint;
  let resultLocation = '';
  for (let locationElement of locations) {
    let [name, coordinate] = locationElement;
if (getDistance(coordinate, point) <= minimal) {
minimal = getDistance(coordinate, point);
resultPoint = coordinate;
resultLocation = name;
}
}
return [resultLocation, resultPoint]
}
// END
