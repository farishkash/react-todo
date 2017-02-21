var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1487690775;

var currentMoment = moment.unix(timestamp);

console.log('Current Moment: ', currentMoment.format('MMM D, YY @ H:MM a'));

//January 3rd, 2017 @ 12:13 AM


console.log('Current Moment Challege: ', currentMoment.format('MMMM Do, YYYY @ H:MM A'));
