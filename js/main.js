$("document").ready(function() {
	$("#typetype").typed({
		strings: ["object", "array","any"],
		typeSpeed: 100,
		loop: true,
		loopCount: Infinity
	});
	var dt = new Date();

	fetch(`https://api.npmjs.org/downloads/point/2017-06-29:${dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate()}/samplyr`).then(function(response) { 
		return response.json();
	}).then(function(j) {
		$(".downloads").html(j.downloads || "(ERROR)"); 
	});
})
