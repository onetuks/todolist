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

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const {destination, draggableId, source} = info;

    // 드래그 예외처리
    if (destination === null) {
      console.log("return");
      return;
    }

    // #7.9 Same Board Movement
    if (destination?.droppableId === source.droppableId) {
      setTodos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]]
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        }
      })
    } 
    // #
    else {

    }
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
