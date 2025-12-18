const stopwatch = document.querySelector('.stopwatch');
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalid;
const startstopwatch= () =>{
    intervalid=setInterval(() => {
        if(seconds < 59){
        seconds++; }
        else if(minutes >= 59){
             minutes=0;
             hours++;
        }
        else{
            seconds=0;
            minutes++;
        }
    const second = String(seconds).padStart(2, "0");
    const minute = String(minutes).padStart(2, "0");
    const hour = String(hours).padStart(2, "0");
    stopwatch.innerText=`${hour} : ${minute} : ${second}`;
} ,1000);
}

  const stopstopwatch= () =>{
     clearInterval(intervalid);
     
  } 

const resetstopwatch= () =>{
    clearInterval(intervalid);
    seconds=0;
    minutes=0;
    hours=0;
    stopwatch.innerText=`00 : 00 : 00`;

}
