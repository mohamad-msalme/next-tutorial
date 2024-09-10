import * as turf from "@turf/turf";

type Position = [number, number];

interface DataObject {
  id: string;
  orderId: number;
  position: Position;
  createdAt: string;
}

export const generateRoute = (): turf.LineString[] => {
  return [
    turf.lineString([
      [36.2306782, 44.0057436],
      [36.3306782, 44.1057436],
      [36.4306782, 44.2057436],
    ]),
    turf.lineString([
      [36.3006782, 44.0157436],
      [36.3406782, 44.0557436],
      [36.3806782, 44.0957436],
      [36.4206782, 44.1357436],
    ]),
    turf.lineString([
      [36.2206782, 44.0257436],
      [36.2606782, 44.0657436],
      [36.3006782, 44.1057436],
      [36.3406782, 44.1457436],
      [36.3806782, 44.1857436],
    ]),
    turf.lineString([
      [36.3506782, 44.0057436],
      [36.3706782, 44.0557436],
      [36.3906782, 44.1057436],
      [36.4106782, 44.1557436],
    ]),
    turf.lineString([
      [36.2206782, 44.0157436],
      [36.2506782, 44.0557436],
      [36.2806782, 44.0957436],
      [36.3106782, 44.1357436],
      [36.3406782, 44.1757436],
    ]),
    turf.lineString([
      [36.2606782, 44.0257436],
      [36.2806782, 44.0657436],
      [36.3006782, 44.1057436],
      [36.3206782, 44.1457436],
      [36.3406782, 44.1857436],
    ]),
    turf.lineString([
      [36.2706782, 44.0357436],
      [36.3006782, 44.0757436],
      [36.3306782, 44.1157436],
      [36.3606782, 44.1557436],
    ]),
    turf.lineString([
      [36.2806782, 44.0457436],
      [36.3106782, 44.0857436],
      [36.3406782, 44.1257436],
      [36.3706782, 44.1657436],
      [36.4006782, 44.2057436],
    ]),
    turf.lineString([
      [36.2906782, 44.0557436],
      [36.3206782, 44.0957436],
      [36.3506782, 44.1357436],
      [36.3806782, 44.1757436],
      [36.4106782, 44.2157436],
    ]),
    turf.lineString([
      [36.3006782, 44.0657436],
      [36.3306782, 44.1057436],
      [36.3606782, 44.1457436],
      [36.3906782, 44.1857436],
      [36.4206782, 44.2257436],
    ]),
  ];
};

export const generateData = (
  routes: turf.LineString[],
  numPoints: number
): DataObject[][] => {
  return routes.map((route) => {
    const distance = turf.length(route, { units: "kilometers" });
    const segmentLength = distance / (numPoints - 1);
    const points: DataObject[] = [];

    for (let i = 0; i < numPoints; i++) {
      const point = turf.along(route, segmentLength * i, {
        units: "kilometers",
      });
      points.push({
        id: `id-${i + 1}`,
        orderId: i + 1,
        position: point.geometry.coordinates as Position,
        createdAt: new Date().toISOString(), // You can customize this date as needed
      });
    }

    return points;
  });
};
