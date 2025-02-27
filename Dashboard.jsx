import Sidebar from "../components/Sidebar";
import TaskBoard from "../components/TaskBoard";
import Calendar from "../components/Calendar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <TaskBoard />
      <Calendar />
    </Container>
  );
}

export default Dashboard;
