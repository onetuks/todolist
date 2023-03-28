import { atom } from "recoil";

interface ITodoState {
    [key: string] : ITodo[],
}

export interface ITodo {
    id: number;
    text: string;
}

export const todoState = atom<ITodoState>({
    key: "todo",
    default: {
        TODO: [],
        DOING: [],
        DONE: [],
        DOLATER: [],
    },
});