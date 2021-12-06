(function() {
	var width = 500, height = 500;

	var svg = d3.select("#chart")
		.append("svg")
		.attr("height", height)
		.attr("width", width)
		.append("g")
		.attr("transform", "translate(0,0)")

	var radiusScale = d3.scaleSqrt().domain([1,300]).range([10, 80])

	// the simulation is a collection of  forces 
	// about where we want to go
	// and how we want our circles to interact
	
	var simulation = d3.forceSimulation()
		.force("x", d3.forceX(width/2).strength(0.05))
		.force("y", d3.forceY(height/2).strength(0.05))
		.force("collide", d3.forceCollide(function(d) {
			return radiusScale(d.average)+1;
		}))

		
		d3.queue()
			.defer(d3.csv, "sales.csv") //Need to filter data to see if compiles circles
			.await(ready)

	function ready (error, datapoints) {

		var circles = svg.selectAll(".artist")
		.data(datapoints)
		.enter().append("circle")
		.attr("class", "artist")
		.attr("r", function(d) {
			return radiusScale(d.sales)
		})
		.attr("fill", "lightblue")
		.on("click",)

		simulation.nodes(datapoints)
		.on('tick', ticked)

		function ticked() {
			circles.attr("cx", function(d) {
				return d.x
			})
			.attr("cy", function(d) {
				return d.y
			})
		}
	}
})();