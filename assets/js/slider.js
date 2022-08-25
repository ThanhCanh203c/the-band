"use strict";

const image = document.querySelector('.slider__img');
const heading = document.querySelector('.slider__heading');
const desc = document.querySelector('.slider__desc');

const slider = {
    img: {
        imgSrc : [
            './assets/img/slider/chicago.jpg',
            './assets/img/slider/la.jpg',
            './assets/img/slider/ny.jpg'
        ],
        imgText : [
            {
                heading: 'Chicago',
                desc: "Thank you, Chicago - A night we won't forget."
            },
            {
                heading: 'Los Angeles',
                desc: "We had the best time playing at Venice Beach!"
            },
            {
                heading: 'New York',
                desc: "The atmosphere in New York is lorem ipsum."
            }
        ]
    },
    index: 0,

    next() {
        this.index++;
        if (this.index > this.img.imgSrc.length-1) {
            this.index = 0;
        }
    },

    update() {
        image.src = this.img.imgSrc[this.index];
        heading.innerText = this.img.imgText[this.index].heading;
        desc.innerText = this.img.imgText[this.index].desc;
    },

    start() {
         setInterval(() => {
            this.next();
            this.update();
         }, 3000);
    }
}

slider.start();