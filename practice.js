//Array

var family=["me","nanna","amma","akka",]
console.log(family);
family[0]="ashok"
console.log(family);
family[4]="uncle"
console.log(family);
family.length=3
console.log(family);
console.log(family.length);
family.length=10
console.log(family)

// object

var obj={
    name:"ashok",
    age:25,
    job:"business",
}
obj.name="goud"
obj.age=20
obj.job="company"

obj.location="hyderabad"
obj.earn=555
console.log(obj)

//number methods

// toString -- to convert num to string

var a=10;
var a1=a.toString()
console.log(typeof a1,a);

// Int -- convert string to num & Float-- use parseFloat when you want to convert a string to a floating-point number.

var a=10.788;
console.log(parseInt(a));

var a=10;
console.log(parseFloat(a));

var a="10";
console.log(parseFloat(a));


// isFinite --accepts a single argument, value , returns true if the passed argument is a finite number, and returns false if the passed argument is either positive Infinity , negative Infinity , or NaN .

var a=10.787;
console.log(isFinite(a));

var a="ashok";
console.log(isFinite(a));

var a=Infinity;
console.log(isFinite(a));


//toFixed --The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.

var a=111.1111;
console.log(a.toFixed());
console.log(a.toFixed(1));
console.log(a.toFixed(2));

//toprecision --The toPrecision() method formats a number to a specified length. A decimal point and nulls are added (if needed), to create the specified length.

var a=111.1111;
console.log(a.toPrecision());
console.log(a.toPrecision(3));

// NaN  -- return false if given value is number & array  and (true if value is string,obj)

var a=10;
console.log(isNaN(a));

var a="ashok"
console.log(isNaN(a));

var a={}
console.log(isNaN(a));

var a=[]
console.log(isNaN(a));


// toExponential -- toExponential() method returns a string, with the number rounded and written using exponential notation.
var a=20;
console.log(a.toExponential());

// toLocalString --The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone.

var a=10;
console.log(a.toLocaleString());

// number --The Number() method converts a value to a number. If the value cannot be converted, NaN is returned.

var a="10"
console.log(Number(a));


var a="ashok";
console.log(Number(a));



//every thing is object in js expect undefinded,num,string,boolean

var a={};
console.log(typeof a);

var a=[];
console.log(typeof a);











