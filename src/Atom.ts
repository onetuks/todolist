import { atom, selector } from "recoil";

export interface ITodoState {
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
        TRASH: [],
    },
});

export const boardState = atom<string[]>({
    key: "boards",
    default: ["TODO", "DOING", "DONE", "DOLATER", "TRASH"]
})