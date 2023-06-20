class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.printTimeCallback = null;
  }




  start(printTimeCallback) {
    this.printTimeCallback = printTimeCallback;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (this.printTimeCallback && typeof this.printTimeCallback === 'function') {
        this.printTimeCallback(this.getTime());
      }
    }, 1000);
  }




  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }




  getSeconds() {
    return this.currentTime % 60;
  }




  computeTwoDigitNumber(value) {
    const valueString = String(value);
    return valueString.padStart(2, '0');
  }



  stop() {
    clearInterval(this.intervalId);
    this.printTimeCallback = null;
  }




  reset() {
    this.currentTime = 0;
  }




  split() {
    // ... your code goes here
  }
}
