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

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

interface IBoardProps {
  todos: string[];
  droppableId: string;
}

function Board({ todos, droppableId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{droppableId}</Title>
      <Droppable droppableId={droppableId}>
        {(magic) => (
          <div
            style={{ backgroundColor: "red" }}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {todos.map((todo, index) => (
              <DraggabbleCard key={todo} todo={todo} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
