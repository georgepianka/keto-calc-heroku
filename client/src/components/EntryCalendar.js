import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = momentLocalizer(moment)


const CustomToolbar = (props) => {

  const navigate = action => {
      props.onNavigate(action)
  }

  return (
            <div className="rbc-toolbar">
                <span className="rbc-btn-group">
                    <button type="button" onClick={navigate.bind(null, "PREV")}>Prev</button>
                </span>
                <div className="rbc-toolbar-label mt-2"><div className="h3">{props.label}</div><button className="btn-sm" type="button" onClick={navigate.bind(null, "TODAY")}>Today</button></div>
                <span className="rbc-btn-group">
                    <button type="button" onClick={navigate.bind(null, "NEXT")}>Next</button>
                </span>
            </div>
          )


    }


const EntryCalendar = ({events}) => (

  <div style={{ height: 800 }}>
    <Calendar
      style={{backgroundColor:"snow"}}
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

        toolbar: CustomToolbar,
        event: (event) => {
          console.log(event)
          return (
            <div> <strong> {event.title} </strong> </div>
          )
        },

        month: {
          dateHeader: ({label, date, dateCell}) => {
            return (
                <button type="button" className="btn-primary btn-md button-hover m-2" onClick={() => console.log(date)}>
                  <span/>
                {label}
                </button>

                  )
              }
            }

        }}

      eventPropGetter={
        (event, start, end, isSelected) => {
          let newStyle = {
            textStyle: 'bold',
            backgroundColor: "transparent",
            color: "black"
            //marginTop: -2,
            //borderRadius: "0px",
            //border: "none"
          };

          return {
            style: newStyle


          };
        }
      }
      /*dayPropGetter={
        (date) => {

          //if (date.getDate() === 7 || date.getDate() === 6)
            return {
              //className: 'special-day',

              style: {
                border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
              }
              //className: "button-hover"
            };
          //else return {};
          }
      }*/

      />

  </div>
);


export default EntryCalendar;
