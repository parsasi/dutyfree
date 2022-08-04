export const createJsBlob = (code): Blob => {
  return new Blob([code], {
    type: "text/javascript",
  });
};
