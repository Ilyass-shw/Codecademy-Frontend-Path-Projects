export const setNextImg = (
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>,
  imgsNumber: number,
): void => {
  setCurrentImg((current) => (current === imgsNumber - 1 ? 0 : current + 1));
};
