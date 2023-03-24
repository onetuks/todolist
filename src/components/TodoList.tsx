import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}

const todoAtom = atom<ITodo[]>({
  key: "todo",
  default: [],
});

interface ITodo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handelValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category: "TODO" },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };

  return (
    <>
      <h1>To do</h1>
      <hr />
      <form onSubmit={handleSubmit(handelValid)}>
        <input {
          ...register("todo", {
            required: "Please write a Todo.",
          })
        }
        placeholder="Write a Todo."
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;
