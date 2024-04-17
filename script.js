const  headerContent = document.querySelector(".header-content")
const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const closeIcon = document.querySelector('.close-icon')

const remove  = document.querySelector("main")

const reload = document.querySelector(".goToTop")

 
hamburgerIcon.addEventListener('click',() =>{
    headerContent.classList.add("menu-open")
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove("menu-open")
})

remove.addEventListener('click',()=>{
    headerContent.classList.remove("menu-open")
})

reload.addEventListener('click',()=>{
    document.querySelector("body > div").scrollTo(0,0)
})




