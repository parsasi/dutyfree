export const createIffeCallback = (callback: () => void): string => {
  return `(${callback.toString()})()`;
};
