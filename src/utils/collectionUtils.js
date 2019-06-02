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

export { rmArrayItem };
