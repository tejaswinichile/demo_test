$(document).ready(function(){
	$("#submit").click(function(){
		
	parser();
	});
});

$(document).ready(function(){
	$("#Enter").click(function(){
	drawLine.line('myCanvas');
	alert("hi");
	});
});

$(document).ready(function(){
	$("#Enter2").click(function(){
	drawLine.lineWithIp('myCanvas');
	});
});