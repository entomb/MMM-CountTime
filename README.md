# MMM-CountTime

forked from https://github.com/boazarad/MMM-CountDown
![Screenshot](https://github.com/entomb/MMM-CountTime/raw/master/screenshots/screenshot.png)

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) which can count time since an event.

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-CountTime',
      config: {
        // See configuration options
      },
    },
  ],
}
```

## Configuration options

| Option           | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| `position`       | _Required_ Where do you want to place the counter (use standard magicmirror positions)                                |
| `event`          | _Required_ Name of event to count down to (displayed above counter)                                                   |
| `date`           | _Required_ Date to count down to (YYYY-MM-DD HH:MM:SS)                                                                |
| `onlyAboveZero`  | Only show values above zero                                                                                           |
| `display`        | What time divisions to display, default to `YMwdhms`. use this as a mask. if you only want weeks and days use `wd`.   |
| `customInterval` | Change the update interval which will help reduce load if you are only showing specific time metrics. Default is 1000 |
| `yearsLabel`     | Choose how you wish to display your Days label. Default is y                                                          |
| `monthsLabel`    | Choose how you wish to display your Days label. Default is m                                                          |
| `weeksLabel`     | Choose how you wish to display your Days label. Default is w                                                          |
| `daysLabel`      | Choose how you wish to display your Days label. Default is d                                                          |
| `hoursLabel`     | Choose how you wish to display your Hours label. Default is h                                                         |
| `minutesLabel`   | Choose how you wish to display your Minutes label. Default is m                                                       |
| `secondsLabel`   | Choose how you wish to display your Seconds label. Default is m                                                       |
