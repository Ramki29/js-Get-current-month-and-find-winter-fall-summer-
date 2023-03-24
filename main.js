var today=new Date();
var month=today.getMonth();;
console.log(month);	

if(month<=3)
	{
		document.write("Fall");
		document.write("<br>");
	}
	else if(3<month && 7>=month)
	{
		document.write("Summer");
		document.write("<br>");
	}
	else if(month>=8 && month<=12)
	{
		document.write("Winter");
		document.write("<br>");
	}
	else
	{
		document.write("only 12 months");
		document.write("<br>");
	}