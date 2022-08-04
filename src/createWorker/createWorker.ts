import { convertFnToObjectUrl } from "../utils/convertFnToObjectUrl";
import type { DutyWorkerOptions, DutyCB } from "../types";

export const createWorker = (code: DutyCB, options?: DutyWorkerOptions) => {
  const urlObject = convertFnToObjectUrl(code);
  return new Worker(urlObject, options);
};
