import { useRecoilValue } from "recoil";
import { todoState } from "../Atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoState);

  return (
    <>
      <h1>To do</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          // {...todo} 보내주는 곳과 사용하는 곳에서 todo에 대한 interface가 같으므로 이렇게 내부 원소를 보내줘도 됨.
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
