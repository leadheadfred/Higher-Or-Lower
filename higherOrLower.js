document.onkeydown = function (f)
{
    console.log(`working ${f.key}`);
}
start = ()=>
{
    console.log("start works")
    let startValue=Math.floor(100*Math.random());
    console.log(5);
    document.getElementById(`startButton`).style.visibility=`hidden`;
    document.getElementById(`higher`).style.visibility=`visible`;
    document.write(startValue);
}