function load_charts(){
	var slide4_figure1_data = {
		labels: ["",2,"",4,"",6,"",8,"",10,"",12,""],
		datasets: [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data: [0.5,0.130434782608696,0.162162162162162,0.5,0.238095238095238,0.258064516129032,0.239130434782609,0.333333333333333,0.027777777777778,0.34375,0.176470588235294,0.428571428571429,0.421052631578947]
			}
		]
	}
	var slide4_figure1 = $('#slide4_figure1').get(0).getContext('2d');
	new Chart(slide4_figure1).Line(slide4_figure1_data, {
		scaleOverride : true,
		scaleSteps : 6,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : .1,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	

	var slide4_figure2_data = {
		labels: ["",2,"",4,"",6,"",8,"",10,"",12,""],
		datasets: [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data:[8,3,6,7,5,8,11,5,1,22,3,15,8]
			}
		]
	}
	var slide4_figure2 = $('#slide4_figure2').get(0).getContext("2d");
	new Chart(slide4_figure2).Line(slide4_figure2_data, {
		scaleOverride : true,
		scaleSteps : 5,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : 5,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	
	var slide5_figure1 = $('#slide5_figure1').get(0).getContext("2d");
	new Chart(slide5_figure1).Line(slide4_figure1_data, {
		scaleOverride : true,
		scaleSteps : 6,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : .1,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	
	var slide6_figure1 = $('#slide6_figure1').get(0).getContext("2d");
	var slide6_figure1_data = {
		labels: ["",2,"",4,"",6,"",8,"",10,"",12,""],
		datasets: [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data: [1,1,0,1,0,0,4,2,0,3,0,0,1]
			}
		]
	}
	new Chart(slide6_figure1).Line(slide6_figure1_data, {
		scaleOverride : true,
		scaleSteps : 5,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : 1,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	
	var slide7_figure1 = $('#slide7_figure1').get(0).getContext("2d");
	var slide7_figure1_data = {
		labels: ["",2,"",4,"",6,"",8,"",10,"",12,""],
		datasets: [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data: [3,0,0,2,0,2,1,0,0,10,2,12,5]
			}
		]
	}
	new Chart(slide7_figure1).Line(slide7_figure1_data, {
		scaleOverride : true,
		scaleSteps : 7,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : 2,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	
	var slide9_figure1 = $('#slide9_figure1').get(0).getContext("2d");
	var slide9_figure1_data = {
		labels: ["",2,"",4,"",6,"",8,"",10,"",12,""],
		datasets: [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data: [3,0,0,2,0,2,1,0,0,10,2,12,5]
			},
			{
				fillColor : "rgba(104, 68, 50, 0.35)",
				strokeColor : "rgba(104, 68, 50, 0.85)",
				pointColor : "rgba(104, 68, 50, 0.85)",
				pointStrokeColor : "#fff",
				pointStrokeColor : "#fff",
				data: [3, 0, 0, 1, 0, 1, 1, 0, 0, 7, 2, 7, 3]
			}
		]
	}
	new Chart(slide9_figure1).Line(slide9_figure1_data, {
		scaleOverride : true,
		scaleSteps : 7,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : 2,
		//Number - The scale starting value
		scaleStartValue : 0,
	});
	
	var slide11_figure1 = $('#slide11_figure1').get(0).getContext("2d");
	var slide11_figure1_data = [
		{
			value: 5,
			color: "#00581a" // green
		},
		{
			value: 7,
			color: "#aad6e6"
		},
		{
			value: 17,
			color: "#ffb1b3"
		},
		{
			value: 12,
			color: "#a8e3bd"
		},
		{
			value: 4,
			color: "#fde910" // purple
		},
		{
			value: 13,
			color: "#aa4203" //orange
		},
		{
			value: 37,
			color: " #0056a7" //blue
		},
		{
			value: 4,
			color: "#c99415" //
		},
		{
			value: 3,
			color: "#317d82"
		},
		{
			value: 19,
			color: "#e6bea5"
		}
	];
	new Chart(slide11_figure1).Pie(slide11_figure1_data,{
		segmentShowStroke : true,
	});
}