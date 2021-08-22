Module.register("MMM-CountTime", {
  // Default module config.
  defaults: {
    event: "Your Birthday:",
    date: "2020-01-01 09:38:00",
    customInterval: 1000,
    onlyAboveZero: false,
    display: 'YMwdhms',
    yearsLabel: 'Years',
    monthsLabel: 'Months',
    weeksLabel: 'Weeks',
    daysLabel: 'Days',
    hoursLabel: 'Hours',
    minutesLabel: 'Minutes',
    secondsLabel: 'Secs',
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
    timeWrapper.className = "time bright light";
    timeWrapper.innerHTML = '' + num;

    const labelText = this.config[`${interval}Label`]
    const label = document.createElement("span");
    label.className = "small dimmed"
    label.innerHTML = num > 1 ? labelText : labelText.slice(0, -1)
    timeWrapper.appendChild(label);

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
    switch (letter) {
      case 'Y': return Math.floor(timeDiff / 60 / 60 / 24 / 365)
      case 'M': return Math.floor(timeDiff / 60 / 60 / 24 / 30)
      case 'w': return Math.floor(timeDiff / 60 / 60 / 24 / 7)
      case 'd': return Math.floor(timeDiff / 60 / 60 / 24)
      case 'h': return Math.floor(timeDiff / 60 / 60)
      case 'm': return Math.floor(timeDiff / 60)

      default:
      case 's': return timeDiff
    }
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
      const timeInterval = this.getTimeInterval(Math.floor(timeDiff / 1000), displayLetter)

      if (this.config.onlyAboveZero && timeInterval < 1) {
        return;
      }

      const block = this.getBlock(interval, timeInterval)
      wrapper.appendChild(block)
    });

    return wrapper;
  }
});
