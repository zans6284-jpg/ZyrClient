const progressBar=document.getElementById('progressBar');
const progressText=document.getElementById('progressText');

let value=0;

const interval=setInterval(()=>{
value++;
progressBar.style.width=value+'%';
progressText.innerText=value+'%';

if(value>=100){
clearInterval(interval);

progressBar.style.transform='translateY(200px) rotate(20deg)';
progressBar.style.transition='1s';

setTimeout(()=>{
window.location.href='index.html';
},1000);
}

},100);