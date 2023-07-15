function currentTime(){
     const hour = document.getElementById("hour");
     const minute = document.getElementById("minute");
     const second = document.getElementById("second");

     let date = new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});
     
     let time = date.split(',')[1].trim();
     
     const [hours,minutes,seconds] = time.split(':');

     hour.innerHTML = hours
     minute.innerHTML = minutes
     second.innerHTML = seconds
    
}

setInterval(currentTime,1000);
