// $ (document).ready (function() {
//     alert('loaded')
//     $('#text').html('This is my text')
//     $('.my-input').val('New input value using jquery')
//     $('#go-button').click(function(){
//         alert('click')
//     })
// });

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
let home_header = document.querySelector('#home');
//Select Initial State of Menu

let showMenu = true;
menuBtn.addEventListener('click', toggleMenu);
//console.log(menuBtn);
function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        home_header.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        home_header.classList.add('show');
        navItems.forEach(item => item.classList.remove('show'));

        
        //set menu state
        showMenu = false;
    }
}












// 
// const menuBtn = $('.menu-btn')[0];
// const menu = $('.menu')[0];
// const menuNav = $('.menu-nav')[0];
// const menuBranding = $('.menu-branding')[0];
// const navItems = $('.nav-item');

// //Select Initial State of Menu

// let showMenu = true;
// menuBtn.click(toggleMenu);
// console.log(menuBtn, navItems);
// function toggleMenu() {
    
//     if(!showMenu) {
//         menuBtn[0].classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));

//     }
//     else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => item.classList.remove('show'));

        
//         //set menu state
//         showMenu = false;
//     }
// }
// 