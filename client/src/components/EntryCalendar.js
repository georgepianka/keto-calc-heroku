import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from '../events'

const localizer = momentLocalizer(moment)
const EntryCalendar = () => (
  <div style={{ height: 700 }}>
    <Calendar
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      events={events}
      views={["month"]}
      defaultDate={moment().toDate()}
    />
  </div>
);


export default EntryCalendar;
