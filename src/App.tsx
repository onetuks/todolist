import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { boardState, todoState } from "./Atom";
import Board from "./components/Board";
import Trash from "./components/Trash";
import { onDragEnd } from "./utils/move";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Boards = styled.div`
  display: flex;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
// const Boards = styled.div`
// display: flex;
// justify-content: center;
// align-items: flex-center;
// width: 100%
// `;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [boards, setBoards] = useRecoilState(boardState);

  return (
    <DragDropContext onDragEnd={(info) => onDragEnd(info, setTodos, setBoards)}>
      <Wrapper>
        <Droppable droppableId="BOARDS">
          {(provided, snapshot) => (
            <Boards ref={provided.innerRef} {...provided.droppableProps}>
              {boards.map((boardId, boardIdx) =>
                boardId !== "TRASH" ? (
                  <Board
                    key={boardId}
                    todos={todos[boardId]}
                    boardId={boardId}
                    boardIdx={boardIdx}
                  />
                ) : null
              )}
              {provided.placeholder}
            </Boards>
          )}
        </Droppable>
      </Wrapper>
      <Trash />
    </DragDropContext>
  );
}

export default App;
