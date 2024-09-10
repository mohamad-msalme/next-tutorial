import { LatLngTuple } from "leaflet";

type Position = LatLngTuple;

interface DataObject {
  id: string;
  orderId: number;
  position: Position;
  createdAt: string;
}

// Function to generate random position
const generateRandomPosition = (): Position => {
  // You can customize the range and logic for generating random positions
  const lat = 36 + Math.random() * 0.2; // Latitude between 36 and 37
  const lng = 44 + Math.random() * 0.4; // Longitude between 44 and 45
  return [lat, lng];
};

// Function to generate data
export const generateRandomLocationLogs = (count: number): DataObject[] => {
  return Array.from({ length: count }, (_, index) => {
    const position = generateRandomPosition(); // Generate a unique position
    return {
      id: `id-${index + 1}`,
      orderId: index + 1,
      position: position,
      createdAt: new Date().toISOString(), // You can customize this date as needed
    };
  });
};
