import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";

import Home from './Home'


const localizer = momentLocalizer(moment)

const EntryCalendar = ({events}) => (
  <div style={{ height: 700 }}>
    <Calendar
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      events={events}
      views={["month"]}
      defaultDate={moment().toDate()}
      selectable={true}
      onSelectEvent={(event) => console.log(event.id)}
      onSelectSlot={(event) => console.log(event.id)}

      components={{
        event: (event) => {
          console.log(event)
          return (
            <div> <strong> {event.title} </strong> </div>
          )
        }
      }}

      eventPropGetter={
        (event, start, end, isSelected) => {
          let newStyle = {
            textStyle: 'bold'
            //backgroundColor: "none",
            //marginTop: -2,
            //borderRadius: "0px",
            //border: "none"
          };

          return {
            style: newStyle,

          };
        }
      }
    />
  </div>
);


export default EntryCalendar;
