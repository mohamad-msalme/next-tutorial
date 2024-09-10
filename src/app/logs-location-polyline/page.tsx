"use client";

import React from "react";
import { LatLngTuple } from "leaflet";
import { LeafletWrapper } from "@/components/map/wrapper/LeafletWrapper";
import { Polyline } from "@/components/map/polyline/Polyline";
import { generateData, generateRoute } from "./test";
import { useGetCurrentPosition } from "@/hooks/useGetCurrentPosition";

const limeOptions = { color: "lime" };

// Generate routes and data
const routes = generateRoute();
const numberOfPoints = 10; // Number of points you want to generate along each route
const allData = generateData(routes, numberOfPoints);

// Convert the data into an array of positions for each route
const routePositions = allData.map((routeData) =>
  routeData.map(({ position }) => position)
);

const Page = () => {
  // Optional: get current position if needed
  const [position, setPosition] = React.useState<LatLngTuple>([0, 0]);
  useGetCurrentPosition((position) =>
    setPosition([position.coords.latitude, position.coords.longitude])
  );

  console.log({ routePositions });

  return (
    <div className="container mx-auto shadow-md mt-4 border border-1 rounded-md p-4">
      Test
      <LeafletWrapper
        {...{
          center: routePositions.flat()[0] || [0, 0], // Center on the first position or default
          scrollWheelZoom: true,
          minZoom: 1,
          zoom: 12,
          maxZoom: 18,
          style: {
            height: 500,
          },
        }}
      >
        {/* Render each route as a Polyline */}
        {routePositions.map((positions, index) => (
          <Polyline
            key={index}
            eventHandlers={{
              click: () => {
                console.log("Clicked");
              },
            }}
            positions={positions}
            pathOptions={{ ...limeOptions, weight: 6, fillColor: "blue" }}
            stroke={true}
          />
        ))}
      </LeafletWrapper>
    </div>
  );
};

export default Page;
