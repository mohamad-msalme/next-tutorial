"use client";
import { LatLngTuple } from "leaflet";
import { useGetCurrentPosition } from "@/hooks/useGetCurrentPosition";
import React from "react";
import { LeafletWrapper } from "@/components/map/wrapper/LeafletWrapper";
import { MapMarker } from "@/components/map/marker/MapMarker";
import { generateRandomLocationLogs } from "./_mockData";

const Page = () => {
  const [position, setPosition] = React.useState<LatLngTuple>([0, 0]);
  useGetCurrentPosition((position) =>
    setPosition([position.coords.latitude, position.coords.longitude])
  );

  const data = generateRandomLocationLogs(100);

  console.log({ position });

  return (
    <div className=" container mx-auto shadow-md mt-4 border border-1 rounded-md p-4">
      Test
      <LeafletWrapper
        {...{
          center: data[0].position,
          scrollWheelZoom: true,
          minZoom: 1,
          zoom: 12,
          maxZoom: 18,
          style: {
            height: 500,
          },
        }}
      >
        {data.map(({ position, orderId, id, createdAt }, ind) => (
          <MapMarker
            key={position[0] + position[1] + ind}
            markerProps={{
              position,
            }}
            popupProps={{
              children: (
                <div className=" space-y-2">
                  <p className="text-sm m-0 text-gray-500">{id}</p>
                  <p className="text-sm m-0 text-gray-500">{createdAt}</p>
                  <p className="text-sm m-0 text-gray-500">{orderId}</p>
                </div>
              ),
            }}
          />
        ))}
      </LeafletWrapper>
    </div>
  );
};
export default Page;
