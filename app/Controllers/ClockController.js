

export class ClockController {
    constructor() {
        this.getClock()
        console.log("got clock")
        this.clockInt()
    }

    getClock() {
        let d = new Date()
        let hour = d.getHours(), min = d.getMinutes(), sec = d.getSeconds(), period = ""
        if (hour == 0) {
            period = "a"; hour = 12
        }
        else if (hour < 12) {
            period = "a";
        }
        else if (hour == 12) {
            period = "p";
        }
        else if (hour > 12) {
            period = "p"; hour -= 12
        }
        if (min <= 9) min = "0" + min

        let clock = "" + hour + ":" + min + period + ""
        document.getElementById('clock').innerHTML = clock
    }

    clockInt() {
        setInterval(this.getClock, 1000);
    }
}

