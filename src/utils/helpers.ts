export const swapItemsInArray = <T>(
  array: Array<T>,
  first: number,
  second: number
): Array<T> => {
  const newArray = [...array];
  [newArray[first], newArray[second]] = [newArray[second], newArray[first]];

  return newArray;
};
