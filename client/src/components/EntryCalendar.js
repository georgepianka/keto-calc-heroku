import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = momentLocalizer(moment)
/*Let’s use bind to create a function double on its base:

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10
The call to mul.bind(null, 2) creates a new function double that passes calls to mul, fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.

That’s called partial function application – we create a new function by fixing some parameters of the existing one.

Please note that here we actually don’t use this here. But bind requires it, so we must put in something like null.
*/
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


const EntryCalendar = ({calendarDays}) => (
    <div style={{ height: 900, backgroundColor: "snow" }}>
    <Calendar
    style={{ height: 800 }}
      startAccessor="start"
      endAccessor="end"
      localizer={localizer}
      events={calendarDays}
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
          dateHeader: ({label, date, dateCell, event}) => {
            return (
                <button type="button" className="btn-primary btn-md button-hover m-2" onClick={() => console.log(event.id)}>
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
