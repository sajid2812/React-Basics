import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counter",
  default: 0,
});

export const even = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const currCount = get(counterAtom);
    return currCount % 2 === 0;
  },
});
