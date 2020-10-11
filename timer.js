var EventEmitter = require("events").EventEmitter;
var timer = new EventEmitter();

var count = 0;
var interval = 1000;

// equivalent to timer.addListener
// https://nodejs.org/api/events.html#events_emitter_addlistener_eventname_listener
timer.on("timed", function(count, uptime) {
    console.log("Event! count: %d, uptime: %d ms", count, uptime);
});

setInterval(function() {
    timer.emit("timed", ++count, count * interval);
}, interval);
