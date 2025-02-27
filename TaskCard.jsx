import styled from "styled-components";

const Card = styled.div`
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TaskTitle = styled.h4`
  margin-bottom: 5px;
`;

const TaskDeadline = styled.p`
  font-size: 12px;
  color: gray;
`;

function TaskCard({ title, deadline }) {
  return (
    <Card>
      <TaskTitle>{title}</TaskTitle>
      <TaskDeadline>Deadline: {deadline}</TaskDeadline>
    </Card>
  );
}

export default TaskCard;
