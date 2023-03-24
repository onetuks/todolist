import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector, todoState } from "../Atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  }

  return (
    <>
      <h1>To do</h1>
      <hr />
      <select onInput={onInput}>
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
}
export default TodoList;
