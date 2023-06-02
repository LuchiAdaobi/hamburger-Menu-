const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
const closeBtn = document.getElementById('close-btn')

btn.addEventListener('click', ()=> {
    nav.classList.add('active')
})
closeBtn.addEventListener('click', ()=>{
    nav.classList.remove("active");
})