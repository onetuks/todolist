import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../Atom";

function Todo({ text, category, id }: ITodo) {
    const setTodoState = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodoState((oldTodos) => {
        const targetIdx = oldTodos.findIndex((todo) => todo.id === id);
        const oldTodo = oldTodos[targetIdx];
        const newTodo = { text, id, category: name };
        console.log("oldTodo: ", oldTodo, "\nnewTodo: ", newTodo);
        return oldTodos;
    })
  };
  return (
    <li>
      <span>{text}</span>
      {/* 클릭이벤트에 파라미터 넣어서 전달하는 방법 1 */}
      {/* {category !== "TODO" && <button onClick={() => onClick("TODO")}>TODO</button>}
        {category !== "DOING" && <button onClick={() => onClick("DOING")}>DOING</button>}
        {category !== "DONE" && <button onClick={() => onClick("DONE")}>DONE</button>} */}
      {/* 클릭이벤트에 파라미터 넣어서 전달하는 방법 2 */}
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          TODO
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}
export default Todo;
