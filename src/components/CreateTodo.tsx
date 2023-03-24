import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../Atom";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  function handelValid({ todo }: IForm) {
    setTodos((oldTodos) => [
      {
        text: todo,
        id: Date.now(),
        category: "TODO",
      },
      ...oldTodos,
    ]);
    setValue("todo", "");
  }
  return (
    <>
      <form onSubmit={handleSubmit(handelValid)}>
        <input
          {...register("todo", {
            required: "Please write a Todo.",
          })}
          placeholder="Write a Todo."
        />
        <button>Add</button>
      </form>
    </>
  );
}
export default CreateTodo;