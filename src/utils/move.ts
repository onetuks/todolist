import { DropResult } from "react-beautiful-dnd";
import { SetterOrUpdater } from "recoil";
import { ITodoState } from "../Atom";

export const onDragEnd = (
  info: DropResult,
  setTodos: SetterOrUpdater<ITodoState>,
  setBoardState: SetterOrUpdater<string[]>
) => {
  console.log(info);

  const { destination, source } = info;

  if (!destination) return;

  if (destination.droppableId == "BOARDS") {
    setBoardState((allBoards) => {
      const boardCopy = [...allBoards];
      const item = boardCopy.splice(source.index, 1)[0];
      boardCopy.splice(destination.index, 0, item);
      return boardCopy;
    });
  } else if (destination?.droppableId === source.droppableId) {
    setTodos((allBoards) => {
      const boardCopy = [...allBoards[source.droppableId]];
      const taskObj = boardCopy[source.index];
      boardCopy.splice(source.index, 1);
      boardCopy.splice(destination.index, 0, taskObj);
      return {
        ...allBoards,
        [source.droppableId]: boardCopy,
      };
    });
  } else if (destination?.droppableId !== source.droppableId) {
    if (source.droppableId !== "BOARDS") {
      setTodos((allBoards) => {
        const sourceBoardCopy = [...allBoards[source.droppableId]];
        const destiBoardCopy = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoardCopy[source.index];
        sourceBoardCopy.splice(source.index, 1);
        if (destination.droppableId !== "TRASH")
          destiBoardCopy.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoardCopy,
          [destination!.droppableId]: destiBoardCopy,
        };
      });
    }
  } else {
    console.log("It might be an Error");
  }
};
