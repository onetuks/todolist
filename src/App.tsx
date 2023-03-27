import {
  DragDropContext,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./Atom";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  height: 100vh;
  width: 100%;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // setTodos((oldTodos) => {
    //   // React랑 웹은 Immutable을 지향함.
    //   // 원본을 변형시켜선 안 됨.
    //   const todosCopy = [...oldTodos];
    //   if (destination?.index !== undefined) {
    //     todosCopy.splice(source.index, 1);
    //     todosCopy.splice(destination!.index, 0, draggableId);
    //   }
    //   return todosCopy;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board key={boardId} todos={todos[boardId]} droppableId={boardId}/>
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
