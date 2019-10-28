import React from 'react';
import CanvasJSReact from '../styles/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = ({ graphDays }) => {

  const toggleDataSeries = (e)=>{
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}

  const options = {
          theme: "light2",
        animationEnabled: true,
        title:{
          text: "NetCarbs - Calories - Weight"
        },
        subtitles: [{
          text: "Click Legend to Toggle Each Variable"
        }],
        axisY: [
          {
            title: "NetCarbs",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD",
            includeZero: false
          },
          {
            title: "Weight",
            titleFontColor: "#fa8072",
            lineColor: "#fa8072",
            labelFontColor: "#fa8072",
            tickColor: "#fa8072",
            includeZero: false
          }
        ],
        axisY2: {
          title: "Calories",
          titleFontColor: "#51CDA0",
          lineColor: "#51CDA0",
          labelFontColor: "#51CDA0",
          tickColor: "#51CDA0",
          includeZero: false
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries
        },
				data: [
        {
					type: "spline",
					name: "NetCarbs",
          color: "#6D78AD",
          axisYIndex: 0,
					showInLegend: true,
					dataPoints: graphDays.netCarbs
				},
        {
					type: "spline",
					name: "Weight",
          color: "#fa8072",
          axisYIndex: 1,
					showInLegend: true,
					dataPoints: graphDays.weight
				},
        {
					type: "spline",
					name: "Calories",
          color: "#51CDA0",
          axisYType: "secondary",
					showInLegend: true,
					dataPoints: graphDays.calories
				}
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
export default Graph;
