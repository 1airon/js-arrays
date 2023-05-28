const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export function getTheNearestLocation(locations, point) {
  let nearestLocation = null;
  let minDistance = Infinity;

  for (const [name, [x, y]] of locations) {
    const distance = getDistance(point, [x, y]);
    if (distance < minDistance) {
      minDistance = distance;
      nearestLocation = [name, [x, y]];
    }
  }

  return nearestLocation;
}
// END
