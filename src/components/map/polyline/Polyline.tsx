import React from "react";
import { lazyLoadReactLeafletComponent } from "../lazyLoadReactLeafletComponent";
import { PolylineProps } from "react-leaflet";

const PolylineLazy = lazyLoadReactLeafletComponent<PolylineProps>("Polyline");

export const Polyline: React.FC<PolylineProps> = (props) => {
  return <PolylineLazy {...props} />;
};
