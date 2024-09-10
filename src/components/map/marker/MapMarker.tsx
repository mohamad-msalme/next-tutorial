import React from "react";
import { MarkerIcon } from "./MarkerIcon";
import { lazyLoadReactLeafletComponent } from "../lazyLoadReactLeafletComponent";
import { MarkerProps, PopupProps, TooltipProps } from "react-leaflet";

const Popup = lazyLoadReactLeafletComponent<PopupProps>("Popup");
const Marker = lazyLoadReactLeafletComponent<MarkerProps>("Marker");
const Tooltip = lazyLoadReactLeafletComponent<TooltipProps>("Tooltip");

type MapMarkerProps = {
  markerProps: MarkerProps;
  popupProps?: PopupProps;
  tooltipProps?: TooltipProps;
  hasTooltip?: boolean;
};

export const MapMarker: React.FC<MapMarkerProps> = ({
  markerProps,
  hasTooltip = false,
  popupProps,
  tooltipProps,
}) => {
  const { children: markerChildren, ...restMarkerProps } = markerProps;

  const markerContent =
    markerChildren ||
    (hasTooltip ? <Tooltip {...tooltipProps} /> : <Popup {...popupProps} />);

  return (
    <Marker interactive icon={MarkerIcon} {...restMarkerProps}>
      {markerContent}
    </Marker>
  );
};
