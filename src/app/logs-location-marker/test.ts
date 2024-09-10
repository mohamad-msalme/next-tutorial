import * as turf from "@turf/turf";

type Position = [number, number];

interface DataObject {
  id: string;
  orderId: number;
  position: Position;
  createdAt: string;
}

const generateRoute = (): turf.LineString => {
  // Example route
  return turf.lineString([
    [36.2306782, 44.0057436],
    [36.3306782, 44.1057436],
    [36.4306782, 44.2057436],
  ]);
};

const generateData = (
  route: turf.LineString,
  numPoints: number
): DataObject[] => {
  const distance = turf.length(route, { units: "kilometers" });
  const segmentLength = distance / (numPoints - 1);
  const points: DataObject[] = [];

  for (let i = 0; i < numPoints; i++) {
    const point = turf.along(route, segmentLength * i, { units: "kilometers" });
    points.push({
      id: `id-${i + 1}`,
      orderId: i + 1,
      position: point.geometry.coordinates as Position,
      createdAt: new Date().toISOString(), // You can customize this date as needed
    });
  }

  return points;
};

// Example usage
const route = generateRoute();
const numberOfPoints = 10; // Number of points you want to generate along the route
const data = generateData(route, numberOfPoints);
console.log(data);
