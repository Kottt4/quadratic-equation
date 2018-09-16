module.exports = function solveEquation(equation) {
 
var a = 1;
var b = 1;
var c = 1;
var stringWork ="";

//созданим рабочую копию
for (i=0; i<equation.length; i++){
if (equation[i] != " ") {
stringWork += equation[i];
};
};

//находим a
if (stringWork[0] === "x") {
a = 1; 
stringWork = stringWork.slice(3);
} else {

       if (stringWork[0] === "-" && stringWork[1] === "x")  
       {a = -1; stringWork = stringWork.slice(4); } else {

var bString = "";
while (stringWork[0] != "*") 
{bString += stringWork[0]; 
stringWork = stringWork.slice(1);};

a= Number(bString); stringWork = stringWork.slice(4);
};
};
//находим b
if (stringWork[0] === "+" && stringWork[1] === "x")  
       {b = 1; stringWork = stringWork.slice(2); } else { 
if (stringWork[0] === "-" && stringWork[1] === "x")  
       {b = -1; stringWork = stringWork.slice(2);
} else {

var aString = "";
while (stringWork[0] != "*") 
{aString += stringWork[0]; 
stringWork = stringWork.slice(1);};

b= Number(aString); stringWork = stringWork.slice(2);
};
};
//находим с
if (stringWork === "")  
       {c = 0;} else {


var cString = "";
while (stringWork != "") 
{cString += stringWork[0]; 
stringWork = stringWork.slice(1);};

c= Number(cString);

};

var solutions =[];
var d = b*b-4*a*c;

if (d===0) {
var x= -b/(2*a);
solutions.push(x);
};

if (d>0){
var dd = Math.sqrt(d);
var x1 = (-b+dd)/(2*a);
x1 = Math.round(x1);
var x2 = (-b-dd)/(2*a);
x2 = Math.round(x2);

solutions.push(x1);
solutions.push(x2);

};
sortFunction = (left, right) => left - right;
solutions.sort(sortFunction);

return solutions;
}
