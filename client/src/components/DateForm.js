import React, { useState }  from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";



const DateForm = ({userDates, startDate, setStartDate }) =>
  //const [startDate, setStartDate] = useState(new Date());

    <DatePicker
    selected={startDate}
    onChange={date => setStartDate(date)}
    showMonthDropdown
    inline

    dayClassName={ date => (userDates.find(userDate =>
      moment(date).isSame(userDate, 'day')) !==undefined  ? "text-success" : undefined)
     }
     />





export default DateForm
