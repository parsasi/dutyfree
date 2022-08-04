import { convertFnToObjectUrl } from "../utils/convertFnToObjectUrl";
import type { DutyWorkerOptions, DutyCB } from "../types";

export const createWorker = (code: DutyCB, options?: DutyWorkerOptions) => {
  const urlObject = convertFnToObjectUrl(code);
  if (typeof Worker === undefined) {
    throw new Error("Your browser does not support web workers");
  }
  return new Worker(urlObject, options);
};
