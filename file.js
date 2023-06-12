var left=document.querySelector("#nav");
var x=document.querySelector("#long")
var right =document.querySelector(".main");
var btn=document.getElementById("btn");
var end=document.querySelector("#end")

btn.onclick=function(){
    x.style.visibility="visible"
    x.style.width="80vw"
    x.style.height="80vh"
}
end.onclick=function(){
    x.style.visibility="hidden"
}
