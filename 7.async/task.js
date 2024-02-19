class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    const result = this.alarmCollection.find((call) => call.time === time);

    if (result) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    return (this.alarmCollection = this.alarmCollection.filter(
      (call) => call.time !== time
    ));
  }

  getCurrentFormattedTime() {
    const time = new Date();
    const currentHours = ("0" + time.getHours()).slice(-2);
    const currentMinutes = ("0" + time.getMinutes()).slice(-2);
    return currentHours + ":" + currentMinutes;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((call) => {
        if (call.time === this.getCurrentFormattedTime() && call.canCall === true) {
          call.canCall = false;
          call.callback();
        }
      });
    });
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((call) => {
      call.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
