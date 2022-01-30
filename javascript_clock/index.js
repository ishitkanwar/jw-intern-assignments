function clockFunction_v1() {
    setInterval(() => {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        document.getElementById('clockv1').innerHTML = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
        // console.log(`${hours}:${formatTime(minutes)}:${formatTime(seconds)}`);
    }, 1000);
};

function clockFunction_v2() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    document.getElementById('clockv2').innerHTML = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
    // console.log(`${hours}:${formatTime(minutes)}:${formatTime(seconds)}`);
    setTimeout(clockFunction_v2, 1000);
};

let clockFunction_v3 = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    document.getElementById('clockv3').innerHTML = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
    // console.log(`${hours}:${formatTime(minutes)}:${formatTime(seconds)}`);
    setInterval(() => {
        seconds += 1;
        if (seconds>59) {
            seconds = 0;
            minutes += 1;
        };
        if (minutes>59) {
            minutes = 0;
            hours += 1;
        }
        if (hours>23) {
            hours = 0;
        }
        document.getElementById('clockv3').innerHTML = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
        // console.log(`${hours}:${formatTime(minutes)}:${formatTime(seconds)}`);
    }, 1000);
;}

let clockFunction_v4 = (hours, minutes, seconds) => {
    document.getElementById('clockv4').innerHTML = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;
    // console.log(`${hours}:${formatTime(minutes)}:${formatTime(seconds)}`);
    seconds += 1;
    if (seconds>59) {
        seconds = 0;
        minutes += 1;
    };
    if (minutes>59) {
        minutes = 0;
        hours += 1;
    };
    if (hours>23) {
        hours = 0;
    };
    setTimeout(clockFunction_v4, 1000, hours, minutes, seconds);
};

function formatTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
};

function startTime() {  
    const today_v4 = new Date();
    let hours_v4 = today_v4.getHours();
    let minutes_v4 = today_v4.getMinutes();
    let seconds_v4 = today_v4.getSeconds();
    clockFunction_v4(hours_v4, minutes_v4, seconds_v4);
    clockFunction_v1();
    clockFunction_v2();
    clockFunction_v3();
};