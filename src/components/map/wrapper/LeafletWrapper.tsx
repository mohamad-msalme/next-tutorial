import React from "react";
import { MapContainerProps, TileLayerProps } from "react-leaflet";
import { lazyLoadReactLeafletComponent } from "../lazyLoadReactLeafletComponent";
import "leaflet/dist/leaflet.css";

const MapContainer =
  lazyLoadReactLeafletComponent<MapContainerProps>("MapContainer");
const TileLayer = lazyLoadReactLeafletComponent<TileLayerProps>("TileLayer");

type LeafletWrapperDynamicProps = MapContainerProps;

export const LeafletWrapper: React.FC<
  React.PropsWithChildren<LeafletWrapperDynamicProps>
> = ({ children, ...props }) => {
  return (
    <MapContainer
      {...{
        center: [50.2312378, 44.0057494],
        scrollWheelZoom: false,
        minZoom: 5,
        zoom: 12,
        maxZoom: 18,

        style: {
          height: 500,
        },
      }}
      {...props}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  );
};
