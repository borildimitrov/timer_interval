function getGoal(){
    console.log(document.getElementById("goal").value);
    if (document.getElementById("goal").value != null || document.getElementById("goal").value != 0){
        goal = document.getElementById("goal").value;
        initial_goal = goal;
        get_goal_seconds = goal * 60;
        get_goal_minutes = goal;
        //return goal;
    }
    else{
        clearInterval(timer);
        alert("Value can't be null in SETTED GOAL");
    }
}

function getInterval(){
    if (document.getElementById("interval").value !== null || document.getElementById("goal").value !== 0){
        interval = document.getElementById("interval").value;
        current_interval = interval;
        //return interval;
    }
    else{
        clearInterval(timer);
        alert("Value can't be null in INTERVAL");
    }
}