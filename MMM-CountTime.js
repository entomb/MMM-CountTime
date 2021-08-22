Module.register("MMM-CountTime", {
  // Default module config.
  defaults: {
    event: "Your Birthday:",
    date: "2020-01-01 09:38:00",
    customInterval: 1000,
    display: 'YMwdhms',
    yearsLabel: 'y',
    monthsLabel: 'm',
    weeksLabel: 'w',
    daysLabel: 'd',
    hoursLabel: 'h',
    minutesLabel: 'min',
    secondsLabel: 's',
  },

  // set update interval
  start: function () {
    var self = this;
    setInterval(function () {
      self.updateDom(); // no speed defined, so it updates instantly.
    }, this.config.customInterval);
  },


  getBlock(interval, num) {
    var wrapper = document.createElement("div");
    wrapper.className = "interval"

    var timeWrapper = document.createElement("div");
    timeWrapper.className = "time bright xlarge light";
    timeWrapper.innerHTML = '' + num + this.config[`${interval}Label`];

    wrapper.appendChild(timeWrapper);

    return wrapper
  },


  getIntervalFromDisplay(letter) {
    switch (letter) {
      case 'Y': return 'years'
      case 'M': return 'months'
      case 'w': return 'weeks'
      case 'd': return 'days'
      case 'h': return 'hours'
      case 'm': return 'minutes'

      default:
      case 's': return 'seconds'
    }
  },

  getTimeInterval(timeDiff, letter) {
    return 123
  },

  // Update function
  getDom: function () {
    var wrapper = document.createElement("div");

    var textWrapper = document.createElement("div");
    textWrapper.className = "align-left week dimmed medium";
    textWrapper.innerHTML = this.config.event;
    wrapper.appendChild(textWrapper);

    var timeNow = new Date(Date.now());
    var timeTarget = new Date(this.config.date);
    var timeDiff = timeNow - timeTarget;

    this.config.display.split("").forEach(displayLetter => {
      const interval = this.getIntervalFromDisplay(displayLetter)
      const timeInterval = this.getTimeInterval(timeDiff, displayLetter)

      const block = this.getBlock(interval, timeInterval)
      wrapper.appendChild(block)
    });

    return wrapper;
  }
});
