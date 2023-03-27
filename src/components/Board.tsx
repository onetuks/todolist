import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggabbleCard from "./DraggabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
    todos: string[], 
    droppableId: string,
}

function Board({todos, droppableId}: IBoardProps) {
    return (
        <Droppable droppableId={droppableId}>
            {(magic) => (
              <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                {todos.map((todo, index) => (
                  <DraggabbleCard key={todo} todo={todo} index={index} />
                ))}
                {magic.placeholder}
              </Wrapper>
            )}
          </Droppable>
    );
}

export default Board;