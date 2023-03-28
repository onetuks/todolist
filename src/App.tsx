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
  max-width: 680px;
  height: 100vh;
  width: 100%;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const {destination, draggableId, source} = info;

    // 드래그 예외처리
    if (!destination) return;

    // #7.10 Cross Board Movement
    setTodos((allBoards) => {
      const sourceBoardCopy = [...allBoards[source.droppableId]];
      sourceBoardCopy.splice(source.index, 1);
      if (destination?.droppableId === source.droppableId) {
        sourceBoardCopy.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoardCopy,
        }
      } else {
        const destBoardCopy = [...allBoards[destination!.droppableId]];
        destBoardCopy.splice(destination!.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoardCopy,
          [destination!.droppableId]: destBoardCopy,
        }
      }
    })
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
