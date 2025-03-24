var procont =document.getElementById("products")
var search =document.getElementById("search")
var productList= procont.querySelectorAll("div")
 
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for (count=0;count<productList.length;count=count+1)
    {
        var productname= productList[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else {
            productList[count].style.display="block"
        }
    }
})

function shownav()
{
     sidenav.style.left="0"
}
function closenav()
{
     sidenav.style.left="-60%"
}