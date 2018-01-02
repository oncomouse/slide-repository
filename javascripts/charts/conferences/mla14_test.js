function process_slide_data(x) {
	return x.map(function(x, i) { 
		return {x: i, y: x}
	});
}

function load_charts() {
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
		              .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		              .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		              .transitionDuration(350)  //how fast do you want the lines to transition?
		              .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
		              .showYAxis(true)        //Show the y-axis
		              .showXAxis(true)        //Show the x-axis
		;
 
		chart.xAxis     //Chart x-axis settings
		    .axisLabel('Collection')
		    .tickFormat(d3.format(',r'));
 
		chart.yAxis     //Chart y-axis settings
		    .axisLabel('Percentage')
		    .tickFormat(d3.format('.02f'));
 
		/* Done setting the chart up? Time to render it!*/
		var myData = [{
			values: process_slide_data([0.5,0.130434782608696,0.162162162162162,0.5,0.238095238095238,0.258064516129032,0.239130434782609,0.333333333333333,0.027777777777778,0.34375,0.176470588235294,0.428571428571429,0.421052631578947]),
			key: "Percentage of Dialogue Poems over Entire Career",
			area: false
		}];
 
		d3.select('#slide4_figure1')    //Select the <svg> element you want to render the chart in.   
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
 
		d3.select('#slide5_figure1')
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
		  
		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });
		return chart;
	});
	
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
		              .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		              .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		              .transitionDuration(350)  //how fast do you want the lines to transition?
		              .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
		              .showYAxis(true)        //Show the y-axis
		              .showXAxis(true)        //Show the x-axis
		;
 
		chart.xAxis     //Chart x-axis settings
		    .axisLabel('Collection')
		    .tickFormat(d3.format(',r'));
 
		chart.yAxis     //Chart y-axis settings
		    .axisLabel('Number')
		    .tickFormat(d3.format('.02f'));
 
		/* Done setting the chart up? Time to render it!*/
		var myData = [{
			values: process_slide_data([8,3,6,7,5,8,11,5,1,22,3,15,8]),
			key: "Number of Dialogue Poems over Entire Career",
			area: false
		}];
 
		d3.select('#slide4_figure2')    //Select the <svg> element you want to render the chart in.   
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
 
		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });
		return chart;
	});
	
	
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
		              .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		              .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		              .transitionDuration(350)  //how fast do you want the lines to transition?
		              .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
		              .showYAxis(true)        //Show the y-axis
		              .showXAxis(true)        //Show the x-axis
		;
 
		chart.xAxis     //Chart x-axis settings
		    .axisLabel('Collection')
		    .tickFormat(d3.format(',r'));
 
		chart.yAxis     //Chart y-axis settings
		    .axisLabel('Frequency')
		    .tickFormat(d3.format('.02f'));
 
		/* Done setting the chart up? Time to render it!*/
		var myData = [{
			values: process_slide_data([1,1,0,1,0,0,4,2,0,3,0,0,1]),
			key: "Frequency of Dramatic Dialogues",
			area: false
		}];
 
		d3.select('#slide6_figure1')    //Select the <svg> element you want to render the chart in.   
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
 
		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });
		return chart;
	});
	
	
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
		              .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		              .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		              .transitionDuration(350)  //how fast do you want the lines to transition?
		              .showLegend(false)       //Show the legend, allowing users to turn on/off line series.
		              .showYAxis(true)        //Show the y-axis
		              .showXAxis(true)        //Show the x-axis
		;
 
		chart.xAxis     //Chart x-axis settings
		    .axisLabel('Collection')
		    .tickFormat(d3.format(',r'));
 
		chart.yAxis     //Chart y-axis settings
		    .axisLabel('Frequency')
		    .tickFormat(d3.format('.02f'));
 
		/* Done setting the chart up? Time to render it!*/
		var myData = [{
			values: process_slide_data([3,0,0,2,0,2,1,0,0,10,2,12,5]),
			key: "Frequency of Chorus Poems",
			area: false
		}];
 
		d3.select('#slide7_figure1')    //Select the <svg> element you want to render the chart in.   
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
 
		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });
		return chart;
	});
	
	nv.addGraph(function() {
		var chart = nv.models.lineChart()
		              .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		              .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		              .transitionDuration(350)  //how fast do you want the lines to transition?
		              .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
		              .showYAxis(true)        //Show the y-axis
		              .showXAxis(true)        //Show the x-axis
		;
 
		chart.xAxis     //Chart x-axis settings
		    .axisLabel('Collection')
		    .tickFormat(d3.format(',r'));
 
		chart.yAxis     //Chart y-axis settings
		    .axisLabel('Frequency')
		    .tickFormat(d3.format('.02f'));
 
		/* Done setting the chart up? Time to render it!*/
		var myData = [{
			values: process_slide_data([3,0,0,2,0,2,1,0,0,10,2,12,5]),
			key: "Frequency of Chorus Poems",
			area: false
		},
		
		{
			values: process_slide_data([3, 0, 0, 1, 0, 1, 1, 0, 0, 7, 2, 7, 3]),
			key: "Frequency of Simple Chorus Poems",
			color: "rgba(104, 68, 50, 0.85)"
		}];
 
		d3.select('#slide9_figure1')    //Select the <svg> element you want to render the chart in.   
		  .datum(myData)         //Populate the <svg> element with chart data...
		  .call(chart);          //Finally, render the chart!
 
		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });
		return chart;
	});
	
	nv.addGraph(function() {
		var chart = nv.models.pieChart()
	    			  .x(function(d) { return d.label })
	    			  .y(function(d) { return d.value })
	    			  .showLabels(false);
 
 
 		var myData = [
			{
				value: 5,
				label: "Self-Quoting" // green
			},
			{
				value: 7,
				label: "Hypothetical"
			},
			{
				value: 17,
				label: "3rd Person"
			},
			{
				value: 12,
				label: "1st Person"
			},
			{
				value: 4,
				label: "Juxtaposed" // purple
			},
			{
				value: 13,
				label: "Dramatic" //orange
			},
			{
				value: 37,
				label: "Choral" //blue
			},
			{
				value: 4,
				label: "Imperative" //
			},
			{
				value: 3,
				label: "Combination"
			},
			{
				value: 19,
				label: "Incidental"
			}	
 		];
 
		d3.select("#slide11_figure1")
	      .datum(myData)
	      .transition().duration(350)
	      .call(chart);
 
	  return chart;
	});
}

;
