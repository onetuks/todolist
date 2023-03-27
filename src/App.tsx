import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./Atom";
import DraggabbleCard from "./components/DraggabbleCard";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  height: 100vh;
  width: 100%;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    setTodos((oldTodos) => {
      // React랑 웹은 Immutable을 지향함. 
      // 원본을 변형시켜선 안 됨. 
      const todosCopy = [...oldTodos];
      todosCopy.splice(source.index, 1);
      todosCopy.splice(destination!.index, 0, draggableId);
      return todosCopy;
    })
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {todos.map((todo, index) => (
                  <DraggabbleCard key={todo} todo={todo} index={index} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
