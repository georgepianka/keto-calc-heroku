import React from 'react';
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from '../events'

BigCalendar.momentLocalizer(moment);
const EntryCalendar = () => (
  <div style={{ height: 700 }}>
    <BigCalendar
      events={events}
      views={["month"]}
      defaultDate={moment().toDate()}
    />
  </div>
);


export default EntryCalendar;
