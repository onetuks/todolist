import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const todoState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
