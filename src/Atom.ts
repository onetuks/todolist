import { atom } from "recoil";

interface ITodoState {
    [key: string] : string[],
}

export const todoState = atom<ITodoState>({
    key: "todos",
    default: {
        to_do: ["a", "b"],
        doing: ["c", "d", "e"],
        done: ["f"],
    },
});