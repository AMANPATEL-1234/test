document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(){
    event.preventDefault()
function test(){
    alert("your order is accepted")
}
function order(){
alert("your order is being Prepared")

}
function pack(){
    alert("your order is being packed")
}
function dele(){
    alert("your order is out for delivery")
}
function delei(){
alert("Order Delivered")

}
setTimeout(test,0)
setTimeout(order,3000)
setTimeout(pack,8000)
setTimeout(dele,10000)
setTimeout(delei,12000);

}