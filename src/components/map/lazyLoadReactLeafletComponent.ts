/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from "next/dynamic";
import * as ReactLeaflet from "react-leaflet";
type ReactLeafletComponentName = keyof typeof ReactLeaflet;

export const lazyLoadReactLeafletComponent = <T = unknown>(
  componentName: ReactLeafletComponentName
) => {
  return dynamic<T>(
    // @ts-ignore
    () =>
      import("react-leaflet").then((mod) => ({ default: mod[componentName] })),
    {
      ssr: false,
    }
  );
};
