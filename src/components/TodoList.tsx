import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../Atom";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const [todos, doings, dones] = useRecoilValue(todoSelector);

  return (
    <>
      <h1>To do</h1>
      <hr />
      <CreateTodo />
      <h2>TODO</h2>
      <ul>
        {todos.map((todo) => (
          // {...todo} 보내주는 곳과 사용하는 곳에서 todo에 대한 interface가 같으므로 이렇게 내부 원소를 보내줘도 됨.
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>DOING</h2>
      <ul>
        {doings.map((doing) => (
          // {...todo} 보내주는 곳과 사용하는 곳에서 todo에 대한 interface가 같으므로 이렇게 내부 원소를 보내줘도 됨.
          <Todo key={doing.id} {...doing} />
        ))}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {dones.map((done) => (
          // {...todo} 보내주는 곳과 사용하는 곳에서 todo에 대한 interface가 같으므로 이렇게 내부 원소를 보내줘도 됨.
          <Todo key={done.id} {...done} />
        ))}
      </ul>
      <hr />
    </>
  );
}
export default TodoList;
