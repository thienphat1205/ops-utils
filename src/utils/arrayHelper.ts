export const sumArrByKey = (arr: any[], key: string): number => {
  const total = arr.map((item) => item[key] || 0).reduce((a, b) => a + b, 0);
  return total;
};

export const getUniqueStringArray = (array: string[]) => [...new Set(array)];

export const mergeTwoArrayByKey = (
  arr1: any[],
  arr2: any[],
  key: string
): any[] => {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push({
      ...arr1[i],
      ...arr2.find((itmInner) => itmInner[key] === arr1[i][key]),
    });
  }
  return merged;
};
