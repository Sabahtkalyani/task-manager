import { format } from "date-fns";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 250px;
  background: white;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

function Calendar() {
  const today = format(new Date(), "PPP");
  
  return (
    <CalendarContainer>
      <h3>📅 {today}</h3>
    </CalendarContainer>
  );
}

export default Calendar;
