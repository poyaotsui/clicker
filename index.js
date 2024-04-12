const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const increaseby10btn=document.getElementById("increaseby10btn");
const decreaseby10btn=document.getElementById("decreaseby10btn");

const countlabel = document.getElementById("countlabel");

let count =0;

increasebtn.onclick=function()
{
    count++;
    countlabel.textContent=count;
}
increaseby10btn.onclick=function()
{
    count=count+10;
    countlabel.textContent=count;
}
decreasebtn.onclick=function()
{
    count--;
    countlabel.textContent=count;
}
decreaseby10btn.onclick=function()
{
    count=count-10;
    countlabel.textContent=count;
}
resetbtn.onclick=function()
{
    count=0;
    countlabel.textContent=count;
}


