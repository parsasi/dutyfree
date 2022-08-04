import { createJsBlob } from "./createJsBlob";
import { createIffeCallback } from "./createIffeCallback";
import type { DutyCB } from "../types";

export const convertFnToObjectUrl = (callback: DutyCB) => {
  const iffeCallback = createIffeCallback(callback);
  const blob = createJsBlob(iffeCallback);

  window.URL = window.URL ?? window.webkitURL;

  return window.URL.createObjectURL(blob);
};
