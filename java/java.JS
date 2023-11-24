var cars = document.querySelectorAll("#content")
var carname = document.querySelector("#cars")
var btn = document.querySelector("#btn")
var totalprice = 0
var totalmoney =document.querySelector("#total-money")
cars.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        carname.innerHTML += item.textContent + "<br>"
        if(carname.innerHTML != ""){
            btn.style.display = "block"
        }
    }
})
btn.onclick = function(){
    totalmoney.innerHTML = totalprice + "$ &nbsp &nbsp total price "
}