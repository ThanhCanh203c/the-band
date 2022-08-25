"use strict";

const menuBtn = document.querySelector('.menu-btn');
let isClose = true;
const navItems = document.querySelectorAll('.nav-list__item');

menuBtn.onclick = () => {
    navItems.forEach((navItem, index) => {
        if(index == 0 || index == navItems.length-1) return;
        navItem.classList.toggle('display-on-mobile');
    })
};

navItems.forEach((navItem, index)=> {
    if (index == 0) return;
    navItem.onclick = () => {
        menuBtn.click();
    }
})