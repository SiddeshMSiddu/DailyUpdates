function countdown() {
    let timer = 7;
    function tick() {
        console.log(timer);
        timer--;
        if (timer > 0) {
            setTimeout(tick, 1000);
        } else {
            console.log("Time's up!");
        }
    }
    tick();
}

countdown(); 
