// function to count down time.
function countDown(time){
    let timer = setInterval(function() {
        time--;
        if (time <= 0){
            clearInterval(timer);
            console.log("DONE!");
        }
        else
            console.log(time);
    }, 1000);
}

// random game function
function randomGame(){
    let result;
    let counter = 0;

    let timer = setInterval(function(){
        result = Math.random();
        counter++;
        if (result > 0.75) {
            clearInterval(timer);
            console.log(`${"It took"} ${counter} ${"try(s) to find a number greater than 0.75."}`)
        }
    }, 1000)
}
