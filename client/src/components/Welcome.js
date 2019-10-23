import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLoginBtn from './FacebookLoginButton';
import ketoCalc from '../styles/ketocalc.jpg'
import {
    Jumbotron,
    Button
} from 'reactstrap';

  const Welcome = () => (
   <div className="m-3">
    <div className="info">
      <h1 className="display-5 font-weight-bold">Keto Calc</h1>
      <img src={ketoCalc} className="d-block mx-auto my-3" alt="KetoCalc" style={{width: 100, height: 100, float: 'none', alignSelf: 'center', marginRight: 5, opacity: .8}}/>
      <h4 className="mb-4 font-weight-light">Keeping You In Ketosis</h4>
      <div>
        <Link className="btn btn-success btn-lg border border-muted text-light mr-2" to="/signup">Sign Up</Link>

        <Link className="btn btn-primary btn-lg border border-muted text-light ml-2" to="/login">Login</Link>
      </div>
        <FacebookLoginBtn />

   </div>
   <div className="flex-row">
   <Jumbotron className="d-inline-block p-5" style={{maxWidth: 800, backgroundColor: "rgba(15, 32, 39, 0.8)"}}>
   <h3 className="display-5 mb-5 font-weight-light text-light text-center"> Calculate | Log | Track </h3>
   <h5 className="mb-3 font-weight-light text-light text-left">
   <ul style={{listStyleType: "square"}}>
    <li className="my-3">Keto Calc lets you Calculate, Log, and Track Net Carbs while on a Ketogenic Diet.</li>
    <li className="my-3">Store Daily Entries for Net Carbs and Calories (plus Protein/Fat) via a Database Search or Manual Entry.</li>
    <li className="my-3">Enter Your Daily Weight so you can Chart your Progress against the Metrics of Ketosis.</li>
  </ul>
   </h5>
   </Jumbotron>
  </div>

  <div><p className="display-3 text-primary"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p></div>

   <Jumbotron className="flex-row mt-5" style={{backgroundColor: "rgba(17, 28, 33, 0.9)"}}>
   <h3 className=" display-5 mb-3 font-weight-light text-light"> Ketogenic Diet Info </h3>
   <h5 className="mb-3 font-weight-light text-light text-left">
   <ul style={{listStyleType: "none"}}>
    <li className="my-2">Ketosis is a natural metabolic state in which the body begins to burn fat for energy by converting it to ketones in the liver when glycogen stores are depleted.</li>
    <li className="my-2">The Ketogenic Diet, Keto, intentionally induces Ketosis via principally restricting Carbohydrates.</li>
    <li className="my-4"><dl><dt>Deplete Glycogen ==> Process Fats ==> Produce Ketones</dt></dl></li>
    <li className="my-2">
    <dl>
    <dt className="my-2">Classic Keto Diet:</dt>
    <dd>70% Fat, 20% Protein, 10% Carbs</dd>
    <dd>4:1 Ratio of Fat to Protein/Carbs</dd>
    <dd>Net Carbs between 20 - 50 grams</dd>
    </dl>
    </li>
    <li className="my-2">
    <dl>
    <dt className="my-2">Net Carbs:</dt>
    <dd>Net Carbs are digestible carbohydrates used for energy, like starches and sugars.</dd>
    <dd>Fiber is a type of carbohydrate from plants that the body cannot process.</dd>
    <dd>Sugar alcohols like Xylitol and Erythritol have a molecular structure that differs enough from sugar to make them almost entirely indigestible.</dd>
    </dl>
    </li>
    <li className="my-4"><dl><dt>Net Carbs = Total Carbohydrates - Fiber - Indigestible Sugar Alcohol</dt></dl></li>
    <li className="my-2">
    <dl>
    <dt className="my-2">Protein:</dt>
    <dd>When the body consumes excess protein, some of the amino acids are turned into glucose via gluconeogenesis.</dd>
    <dd>The target range is 0.7–0.9 grams of protein per pound of body weight.</dd>
    </dl>
    </li>
    <li className="my-2">
    <dl>
    <dt className="my-2">Testing Ketosis:</dt>
    <dd>Track Ketones via a Blood Ketone Meter.</dd>
    <dd>Determine if you are in Ketosis via Urine Sticks (yes/no without an accurate measure of blood ketones).</dd>
    <dd>Establish Maximum Net Carbs by first eating less than 35 grams of Net Carbs (20-50 gram range), verifying Ketosis via a ketone meter, and slowly increasing Carbohydrate consumption by 5 grams each day.</dd>
    </dl>
    </li>
    <li className="my-2">
    <dl>
    <dt className="my-2">Electrolytes:</dt>
    <dd>Since insulin levels remain lower during Ketogenesis due to lack of carbohydrates, the body excretes more water along with essential electrolytes like Sodium, Potassium, Calcium, and Magnesium.</dd>
    <dd>Increase intake of these electrolytes through diet or other supplementation.</dd>
    </dl>
    </li>
    <li className="my-3">
    <dl>
    <dt className="my-2">*** Disclaimer:</dt>
    <dd><i>All the information presented in this README is for educational purposes only.
    You should consult your physician or other health care professional before starting any diet to determine if it is right for your needs.</i></dd>
    </dl>
    </li>
   </ul>
   </h5>
   </Jumbotron>


   </div>









 );

 export default Welcome;
