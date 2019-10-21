import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLoginBtn from './FacebookLoginButton';
import ketoCalc from '../styles/ketocalc.jpg'
import {
    Jumbotron,
    Button
} from 'reactstrap';

  const Welcome = () => (
   <div>
    <Jumbotron className="info">
      <h1 className="display-5 font-weight-bold">Keto Calc</h1>
      <img src={ketoCalc} className="Welcome" alt="KetoCalc" style={{width: 50, height: 50, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
      <h6 className="mb-3 font-weight-light">Keeping You In Ketosis</h6>

        <Button><Link to="/signup">Sign Up</Link></Button>  <Button><Link to="/login">Login</Link></Button>

   <FacebookLoginBtn />
   </Jumbotron>
   </div>

 );

 export default Welcome;
