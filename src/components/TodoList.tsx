import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoSelector, todoState } from "../Atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  return (
    <>
      <h1>To do</h1>
      <hr />
      <select onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
}
export default TodoList;
