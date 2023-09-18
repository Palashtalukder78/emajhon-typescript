export const errorfunction = (errortext) => {
  const error = errorText.message;
  const startIndex = error.indexOf("(") + 1;
  const endIndex = error.indexOf(")");
  const errorMessage = error.slice(startIndex, endIndex).trim();

  const parts = errorMessage.split("/");
  const desiredMessage = parts[1] || parts[0];
  return desiredMessage;
};
