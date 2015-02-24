



function parser() {





	document.getElementById("form").value;
	console.log("hi");
	var pattern_1 =/[a-z0-9]*[x|y][+-][a-z0-9]*[x|y][+-][a-z0-9]*[=]/;
	var pattern_2 =/[a-z0-9]*[x|y][+-][a-z0-9]*[x|y][=][a-z0-9]*/;
	var pattern1=/[a-z0-9][x]/;
	var pattern2=/[a-z0-9][y]/;
	var pattern3=/[a-z0-9][=]/;
	var pattern4=/=[a-z0-9]/;
	var str=document.myform.string.value;
	console.log(str);
	if(pattern_1.test(str))
	{
		var a_string=str.match(pattern1);
		var str1=a_string.toString();
		a=str1.split("x");
		console.log("a="+a[0]);
		
		
		var b_string=str.match(pattern2);
		var str1=b_string.toString();
		b=str1.split("y");
		console.log("b="+b[0]);
		
		var c_string=str.match(pattern3);
		var str1=c_string.toString();
		c=str1.split("=");
		console.log("c="+c[0]);
	}
	else if(pattern_2.test(str))
	{
		a_string=str.match(pattern1);
		var str1=a_string.toString();
		var a=str1.split("x");
		console.log("a="+a[0]);
		
		b_string=str.match(pattern2);
		var str1=b_string.toString();
		var b=str1.split("y");
		console.log("b="+b[0]);
		
		c_string=str.match(pattern4);
		var str1=c_string.toString();
		var c=str1.split("=");
		console.log("c="+c[1]);
	}
	if(parseInt(a))
	{
		
		val_a=parseInt(a);
		val_b=parseInt(b);
		val_c=parseInt(c);
		document.getElementById("input_val").style.display='none';
		document.getElementById("input_steps").style.display='block';
		
		
	}
	else {
		console.log("enter value");
		document.getElementById("input_val").style.display='block';
	}
	
	
		
	
	
	return 0;
	
}
 

var drawLine = {
	
	line : function drawL(id) {
		
	ct = document.getElementById(id);
	ctx = ct.getContext("2d");
	var x1=ct.width/2;
	var y1=ct.height/2;
	
	console.log("Line");	
	
	
	
	var low=document.input.lower.value;
	var up=document.input.upper.value;
	var step=document.input.steps.value;
	var p=parseInt(document.input.val_1.value);
	var q=parseInt(document.input.val_2.value);
	var r=parseInt(document.input.val_3.value);
	var no=x1+parseInt(up);
	var i=x1+parseInt(low);
	ctx.moveTo(i,y1);
	
	for(x1=i+parseInt(step);x1<no;)
	{
		
		y1=((p*parseInt(x1))+r)/q;
		console.log(x1+" "+y1);
		ctx.lineTo(x1,y1);
		ctx.stroke();
		
		ctx.moveTo(x1,y1);
		x1=x1+parseInt(step);
	}
	return 0;		
		
	},
	
	lineWithIp : function drawLI(id) {
		
		ct = document.getElementById(id);
		ctx = ct.getContext("2d");
		
		var x1=ct.width/2;
		var y1=ct.height/2;
		
		var low=document.ip_steps.lower.value;
		var up=document.ip_steps.upper.value;
		var step=document.ip_steps.steps.value;
		var no=x1+parseInt(up);
		var i=x1+parseInt(low);
		
		
		var p=parseInt(val_a);
		var q=parseInt(val_b);
		var r=parseInt(val_c);
		ctx.moveTo(i,y1);
		for(x1=i+parseInt(step);x1<no;)
		{
		
			y1=((p*parseInt(x1))+r)/q;
			console.log(x1+" "+y1);
			ctx.lineTo(x1,y1);
			ctx.stroke();
		
			ctx.moveTo(x1,y1);
			x1=x1+parseInt(step);
		}
	return 0;
		
		return 0;
	}
	
	
}