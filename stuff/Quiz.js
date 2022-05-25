// To find out what the only good color is 
    function number1(v)
{
    if ( v === "b" )
    {
        document.getElementById("result").innerHTML=
        "CORRECT :)";
    }

    else if ( v != "a,c,d")
    {
        document.getElementById("result").innerHTML=
        "Not correct :("; 
    }
}
//to find this anwser
function number2(v)
{
    if ( v === "a" )
    {
        document.getElementById("result1").innerHTML=
        "CORRECT :)";
    }

    else if ( v != "b,c,d")
    {
        document.getElementById("result1").innerHTML=
        "Not correct :("; 
    }
}

