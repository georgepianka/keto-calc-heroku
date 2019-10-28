import React from 'react';
import CanvasJSReact from '../styles/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SplineGraph = ({ graphDays }) => {

  const options = {
				animationEnabled: true,
				title:{
					text: "NetCarbs-Calories-Weight"
				},
				axisY : {
					title: "Number of Customers",
          interval: 10,
					includeZero: false
				},
				toolTip: {
					shared: true
				},
				data: [
        {
					type: "spline",
					name: "NetCarbs",
					showInLegend: true,
					dataPoints: graphDays.netCarbs
				},
        {
					type: "spline",
					name: "Calories",
					showInLegend: true,
					dataPoints: graphDays.calories
				},
        {
					type: "spline",
					name: "Weight",
					showInLegend: true,
					dataPoints: graphDays.weight
				},
				]
		}

		return (
		<div>
			<CanvasJSChart options = {options} />
				{/* onRef={ref => this.chart = ref}
        You can get reference to the chart instance by passing onRef = {ref => this.chart = ref} props to the component. This allows you to access all chart properties and methods including render().
        */}

		</div>
		);
  };
export default SplineGraph;
