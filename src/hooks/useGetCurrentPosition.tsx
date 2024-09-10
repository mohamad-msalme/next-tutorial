"use client";
import React from "react";

export const useGetCurrentPosition: Geolocation["getCurrentPosition"] = (
  successCallback,
  errorCallback
) => {
  const successCallbackRef = React.useRef(successCallback);
  const errorCallbackRef = React.useRef(errorCallback);

  React.useLayoutEffect(() => {
    if (successCallbackRef.current !== successCallback) {
      successCallbackRef.current = successCallback;
    }
    if (errorCallbackRef.current !== errorCallback) {
      errorCallbackRef.current = errorCallback;
    }
  }, [errorCallback, successCallback]);

  React.useEffect(() => {
    if (!window) return;
    window.navigator.geolocation.getCurrentPosition(
      successCallbackRef.current,
      errorCallbackRef.current
    );
  }, []);
};
