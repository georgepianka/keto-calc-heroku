import React, { useState }  from 'react';
import DatePicker from 'react-datepicker';
import ketoCalc from '../styles/ketocalc.jpg';
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";



const DayForm = ({userDates}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (


    <div className="info p-4">
    <h1 className="display-5 font-weight-bold">Keto Calc</h1>
    <img src={ketoCalc} className="d-block mx-auto my-3" alt="KetoCalc" style={{width: 100, height: 100, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
    <h4 className="mb-5 font-weight-light">Keeping You In Ketosis</h4>
    <h2 className="display-5 font-weight-bold"> LOG </h2>
    <DatePicker
    selected={startDate}
    onChange={date => console.log(date)}
    showMonthDropdown
    inline

    dayClassName={ date => (userDates.find(userDate =>
      moment(date).isSame(userDate, 'day')) !==undefined  ? "text-success" : undefined)
     }
     />
    </div>
  );
};




export default DayForm
