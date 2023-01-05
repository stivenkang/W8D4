// Timing is Everything

class Clock {
    constructor() {
        const date = new Date();

        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        let time = `${this.hours} : ${this.minutes} : ${this.seconds}`;
        console.log (time);
    }

    _tick() {
        console.log(this);
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

        this.printTime();
    }
}

const clock = new Clock();