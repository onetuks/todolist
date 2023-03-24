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

export const todoSelector = selector({
    key: "todoSelector",
    get: ({get}) => {
        const todos = get(todoState);
        return [
            todos.filter((todo) => todo.category === "TODO"),
            todos.filter((todo) => todo.category === "DOING"),
            todos.filter((todo) => todo.category === "DONE"),
        ]
    },
})