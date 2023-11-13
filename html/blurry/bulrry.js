window.addEventListener("load", () =>{
    var main = document.querySelector(".main");
    var counter = document.querySelector("#counter");
    
    var count = 0;

    counting = () => {
        count++;
    
        if(count >= 100)
        {
            clearInterval(interval)
        }
    
        counter.innerText = `${count}K+`
        main.style.filter = `blur(${scale(count, 0, 100, 5, 0)}px)`
    }
    
    var interval = setInterval(counting, 50)
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}