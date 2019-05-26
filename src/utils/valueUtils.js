const parsePrice = price => {
  const value = price.toString();
  if (value.length > 8) return value.substring(0, 8);
  return value;
};

export { parsePrice };
