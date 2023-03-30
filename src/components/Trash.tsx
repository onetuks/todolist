import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
    ? "#dfe6e9" 
    : props.isDraggingFromThis 
    ? "#b2bec3" 
    : "transparent"
  };
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

interface IAreaProps {
    isDraggingOver: boolean;
    isDraggingFromThis: boolean;
  }

function Trash() {
    return <Wrapper>
        <Title>TRASH</Title>
        <Droppable droppableId="TRASH">
            {(provided, snapshot) => (
                <Area
                isDraggingOver={snapshot.isDraggingOver}
                isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                ref={provided.innerRef}
                {...provided.droppableProps}>
                </Area>
            )}
        </Droppable>
    </Wrapper>
}
export default Trash;