let temp = document.getElementById("test")
console.log(document.getElementById("test"))
temp.onclick=function (e){
    console.log("我被触发了")
    temp.style.backgroundColor = "#000"
}