import styled from "styled-components";
import { Button } from "@mui/material";

const SidebarContainer = styled.div`
  width: 250px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const StatsCard = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <StatsCard>📝 Open Tasks: 5</StatsCard>
      <StatsCard>✅ Completed Tasks: 2</StatsCard>
      <Button variant="contained" color="primary">
        + Add Task
      </Button>
    </SidebarContainer>
  );
}

export default Sidebar;
