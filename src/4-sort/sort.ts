export const sort = (arr: string[]): string[] => {
  return arr.sort((a , b) => a.localeCompare(b));
};
