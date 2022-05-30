// Add the coffee to local storage with key "coffee"

let url="https://masai-mock-api.herokuapp.com/coffee/menu"
async function data(){
let res=await fetch(url)
let getdata=await res.json()
console.log(getdata.menu.data);
append(getdata.menu.data)

}
data()

function append(data){
data.forEach(function(el){
let title=document.createElement("h4")
title.innerText=el.title;
let img=document.createElement("img")
img.setAttribute("src",el.image)
let price=document.createElement("p")
price.innerText=el.price;
let tite=document.createElement("h6")
tite.innerText=el.title;
let button=document.createElement('button')
button.innerText="Bucket"
button.setAttribute("id","row")

document.querySelector("#coffee").append(title,img,price,tite,button)


})
localStorage.setItem("mydata",JSON.stringify(append(data)))
}


