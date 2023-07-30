const hourE1= document.getElementById("hour");
const minuteE1= document.getElementById("minute");
const secondE1= document.getElementById("second");
const ampmE1= document.getElementById("ampm");
/*function UpdateClock(){
  let h= new Date().getHours();
  let s= new Date().getMinutes();
  let m= new Date().getSeconds();
  let ampm= "AM";
  if(h>12){
    h=h-12;
    ampm="PM";
  }
  h=h<10? "0"+h:h;
  hourE1.innerText=h;
  minuteE1.innerText=m;
  secondE1.innerText=s;
  ampmE1,(innerText=ampm);
  setTimeout(()=>{
    UpdateClock();
  },1000);
}*/

function UpdateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondE1.innerText = s;
  ampmE1.innerText = ampm;

  /*setTimeout(() => {
    UpdateClock();
  }, 1000);*/
}
setInterval(UpdateClock, 500);