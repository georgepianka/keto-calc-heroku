import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SplineGraph = ({ dataPoints }) => {

  const options = {
				animationEnabled: true,
				title:{
					text: "Number of New Customers"
				},
				axisY : {
					title: "Number of Customers",
					includeZero: false
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "2016",
					showInLegend: true,
					dataPoints: dataPoints
				},
				{
					type: "spline",
					name: "2017",
					showInLegend: true,
					dataPoints: [
						{ y: 172, label: "Jan" },
						{ y: 173, label: "Feb" },
						{ y: 175, label: "Mar" },
						{ y: 172, label: "Apr" },
						{ y: 162, label: "May" },
						{ y: 165, label: "Jun" },
						{ y: 172, label: "Jul" },
						{ y: 168, label: "Aug" },
						{ y: 175, label: "Sept" },
						{ y: 170, label: "Oct" },
						{ y: 165, label: "Nov" },
						{ y: 169, label: "Dec" }
					]
				}]
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
