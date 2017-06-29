class Clock {
  constructor() {
    this.date = new Date(Date.now());
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime();
    setInterval(() => this._tick(), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    let hoursString = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    let minutesString = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;
    let secondsString = this.seconds > 9 ? `${this.seconds}` : `0${this.seconds}`;
    console.log(`${hoursString}:${minutesString}:${secondsString}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    if (this.hours == 23 && this.minutes == 59 && this.seconds == 59) {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    } else if (this.seconds == 59 && this.minutes == 59) {
      this.hours += 1;
      this.minutes = 0;
      this.seconds = 0;
    } else if (this.seconds == 59) {
      this.seconds = 0;
      this.minutes += 1;
    } else if (this.minutes == 59) {
      this.hours += 1;
      this.minutes = 0;
    } else {
      this.seconds += 1;
    }
  this.printTime();
  }
}

const clock = new Clock();
