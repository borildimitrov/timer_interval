import * from /utils.js;


let interval;
let goal;
let intervalSpan = document.getElementById("intervalSpan");
let start_button = document.getElementById("start");
let stop_button = document.getElementById("stop");

start_button.onclick = function() {
    getValue(goal);
    console.log(goal);
//     getGoal();
//     getInterval();
//     console.log(interval);
//    timer = setInterval(start, 1000);
//    start_button.disabled = true;
//    stop_button.disabled = false;
}
let current_interval;
let initial_goal;
let get_goal_seconds;
let get_goal_minutes;



function start() {
    console.log(current_interval);
    intervalSpan.innerHTML = current_interval--;
    if (current_interval == 0) {
        get_goal_seconds = get_goal_seconds - interval;
        get_goal_minutes = get_goal_seconds / 60;
        document.getElementById("goal").value = Math.floor(get_goal_minutes);
        current_interval = interval;
        if (get_goal_minutes <= 0 ) {
            clearInterval(timer);
            alert("Timer has finished!");
            start_button.disabled = false;
            goal = initial_goal;
            get_goal_seconds = goal * 60;
            get_goal_minutes = goal;
            console.log(goal);
            document.getElementById("goal").value = goal;
            timerFinished = true;
            stop_button.disabled = true;
        }

    }
}
function stop() {
    clearInterval(timer);
}
