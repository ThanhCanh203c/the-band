"use strict";

const image = document.querySelector('.slider__img');
const heading = document.querySelector('.slider__heading');
const desc = document.querySelector('.slider__desc');

const slider = {
    data: [
        {
            heading: 'Chicago',
            desc: "Thank you, Chicago - A night we won't forget.",
            path: "./assets/img/slider/chicago.jpg"
        },
        {
            heading: 'Los Angeles',
            desc: "We had the best time playing at Venice Beach!",
            path: "./assets/img/slider/la.jpg"
        },
        {
            heading: 'New York',
            desc: "The atmosphere in New York is lorem ipsum.",
            path: "./assets/img/slider/ny.jpg"
        }
    ],
    index: 0,

    next() {
        this.index++;
        if (this.index > this.data.length-1) {
            this.index = 0;
        }
    },

    update() {
        image.src = this.data[this.index].path;
        heading.innerText = this.data[this.index].heading;
        desc.innerText = this.data[this.index].desc;
    },

    start() {
         setInterval(() => {
            this.next();
            this.update();
         }, 3000);
    }
}

slider.start();