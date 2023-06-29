const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_menu")

hamburger.addEventListener("click", () => {
    console.log('aaaaaaaaaaaaaaaaa')
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
})) 