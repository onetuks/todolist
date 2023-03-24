import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../Atom";

function Todo({ text, category, id }: ITodo) {
    const setTodoState = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodoState((oldTodos) => {
        const targetIdx = oldTodos.findIndex((todo) => todo.id === id);
        const newTodo = { text, id, category: name as any };
        return [...oldTodos.slice(0, targetIdx), newTodo, ...oldTodos.slice(targetIdx+1)];
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
      {category !== Categories.TODO && (
        <button name={Categories.TODO} onClick={onClick}>
          TODO
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}
export default Todo;
