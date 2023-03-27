import { atom, selector } from "recoil";

export enum Categories {
    "TODO" = "TODO",
    "DOING"= "DOING",
    "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const todoState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({get}) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({set}, newValue) => {
    const min = Number(newValue) * 60;
    set(minuteState, min);
  },
});