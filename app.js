const humburger =Document.getElementById("humburger")
const navList = document.getElementById("navlist")

humburger.addEventListener("Click", ()=>{
    navList.classList.toggle("navlist-acting")
})