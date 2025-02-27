import styled from "styled-components";
import TaskCard from "./TaskCard";

const ColumnContainer = styled.div`
  flex: 1;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ColumnTitle = styled.h3`
  text-align: center;
  margin-bottom: 15px;
`;

function TaskColumn({ title }) {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <TaskCard title="Brainstorming" deadline="12/12/24" />
      <TaskCard title="Research" deadline="15/12/24" />
    </ColumnContainer>
  );
}

export default TaskColumn;
