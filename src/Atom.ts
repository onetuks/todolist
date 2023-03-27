import { atom } from "recoil";

interface ITodoState {
    [key: string] : string[],
}

export const todoState = atom<ITodoState>({
    key: "todo",
    default: {
        TODO: ["a", "b"],
        DOING: ["c", "d", "e"],
        DONE: ["f"],
    },
});