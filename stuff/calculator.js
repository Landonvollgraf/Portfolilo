
// Use insert() function to insert the number in textview.
function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. 
function backspace()
{
var exp = document.form1.btn.value;
document.form1.btn.value = exp.substring(0, exp.length - 1); from total length ? 
} */

// Use number function to work with two
function number(num) 
{
document.One.two.value = document.One.two.value + num;
}

// Use equation function to change result bassed on passed values.
function equation()
{
var exp = document.One.two.value;
if(exp)
{
document.One.two.value = eval(exp)
}
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. 
function backspace()
{
var exp = document.One.btn.value;
document.One.btn.value = exp.substring(0, exp.length - 1); from total length ? 
} */
