// Timing is Everything

class Clock {
    constructor() {
        const date = 

        this.hours = date.prototype.getHours();
        this.minutes = date.prototype.getMinutes();
        this.seconds = date.prototype.getSeconds();

        setInterval(printTime, 1000);
    }

    printTime() {
        let time = `${this.hour} : ${this.minutes} : ${this.seconds}`;
        console.log (time);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours === 24) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }

        printTime()
    }
}

const clock = new Clock();