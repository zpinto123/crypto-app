/**
 * Remove item from array
 * @param {*} array - Array from where to remove item (Array of strings/numbers)
 * @param {*} item - Item to be removed (string/number)
 */
const rmArrayItem = (array, item) => {
  const newArray = [...array];
  const indexOfItem = newArray.indexOf(item);
  if (indexOfItem !== -1) newArray.splice(indexOfItem, 1);
  return newArray;
};

/**
 * Convert object to array
 * @param {*} obj - Object to convert to array { bitcoin: {...coin}, ltc: {...coin2} } => [{ ...coin },{ ...coin2 }]
 */
const objectToArray = obj => {
  const result = [];
  Object.keys(obj).forEach(key => result.push(obj[key]));
  return result;
};

export { objectToArray, rmArrayItem };
