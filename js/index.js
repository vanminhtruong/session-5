let menuOpen = document.querySelector('header .group-menu .click-sidebar');
let menuClose = document.querySelector('header .group-menu .click-close');
let show_menu = document.querySelector('.group-menu ul');
let show_close = document.querySelector('group-menu ul button');
let isClick = false; 
menuOpen.addEventListener('click', (e)=>{
    e.preventDefault();
    show_menu.style.marginLeft = "0px";
    console.log(show_menu)
    isClick = !isClick;
    // show_close.style.display = "block";
})


menuClose.addEventListener("click", (e)=>{
    e.preventDefault();
    show_menu.style.marginLeft = "-350px";
    isClick = false;
})

window.addEventListener("scroll",(e)=>{
    e.preventDefault();
    if(isClick){
        window.scrollTo(0,0);
    }
})