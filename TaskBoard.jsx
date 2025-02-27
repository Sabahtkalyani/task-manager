import styled from "styled-components";
import TaskColumn from "./TaskColumn";

const BoardContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 20px;
`;

function TaskBoard() {
  return (
    <BoardContainer>
      <TaskColumn title="To Do" />
      <TaskColumn title="In Progress" />
      <TaskColumn title="Done" />
    </BoardContainer>
  );
}

export default TaskBoard;
