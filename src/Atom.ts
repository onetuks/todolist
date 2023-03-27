import { atom, selector } from "recoil";

export const todoState = atom({
    key: "todos",
    default: ["a", "b", "c", "d", "e", "f"],
});