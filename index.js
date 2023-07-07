let canvas=document.getElementById("canvas");
let ct=canvas.getContext("2d");
let decrement=document.getElementById("decrement");
let sizeel=document.getElementById("size");
let increment=document.getElementById("increment");
let colorel=document.getElementById("color");
let clear=document.getElementById("clear");
colorel.value="black";
function updatesize(){
    sizeel.innerHTML=size;
}
increment.addEventListener("click",(e)=>{
size+=5;
if(size>40) size=40;
updatesize();
})
decrement.addEventListener("click",(e)=>{
    size-=5;
    if(size<10) size=10;
    updatesize();
    })
    colorel.addEventListener("change",(e)=>{
        color=e.target.value;
        })
        clear.addEventListener("click",(e)=>{
            ct.clearRect(0,0,500,500);
            })
// ct.moveTo(100,100);
// ct.lineTo(200,200);

// ct.strokeStyle="red"
// ct.lineWidth=100;
// ct.stroke();
// ct.moveTo(220,220);
// ct.lineTo(300,300);

// ct.strokeStyle="red"
// ct.lineWidth=100;
// ct.stroke();
// ct.beginPath();
// ct.arc(100,100,20,0,Math.PI*2);
// ct.fill();
let x,y,size=10,color='black';
let ispressed=false;
function circle(x,y){
    

ct.beginPath();
 ct.arc(x,y,size,0,Math.PI*2);
 ct.fillStyle=color
 ct.fill();
}

function line(x1,y1,x2,y2){
    ct.beginPath();
    ct.moveTo(x1,y1);
ct.lineTo(x2,y2);
ct.strokeStyle=color
ct.lineWidth=2*size;
ct.stroke();
}
//line(100,200,200,100);
canvas.addEventListener('mousedown',(e)=>{
    x=e.offsetX;
    y=e.offsetY;
    ispressed=true;
    circle(x,y);

})
canvas.addEventListener('mouseup',(e)=>{
  
    ispressed=false;
   // ct.clearRect(0,0,500,500);
    

})
canvas.addEventListener('mousemove',(e)=>{
    let x2=e.offsetX;
     let y2=e.offsetY;
    if(ispressed){
         let x2=e.offsetX;
        let y2=e.offsetY;
        circle(x2,y2);
       line(x,y,x2,y2);
        x=x2,y=y2;
    }

})