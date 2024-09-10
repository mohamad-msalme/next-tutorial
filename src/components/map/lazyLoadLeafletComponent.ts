/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as Leaflet from "leaflet";
import dynamic from "next/dynamic";

type LeafletComponentName = keyof typeof Leaflet;

export const lazyLoadLeafletComponent = <T>(
  componentName: LeafletComponentName
) => {
  return dynamic<T>(
    // @ts-ignore
    () => import("leaflet").then((mod) => ({ default: mod[componentName] })),
    {
      ssr: false,
    }
  );
};
