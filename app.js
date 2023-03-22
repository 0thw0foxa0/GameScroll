let scroll=document.getElementById("TextScroll");
let btnmusic = document.getElementById('play');
const Music = document.getElementById('music');
const Icon =document.getElementById('icon');
let bool =true;
let a=0;

let maxspeen=curentspeen=0;
function sum(e){
   playMusicScroll()
    if(e.deltaY!=null || e.deltaY!=0){
        document.getElementById('scrollpx').style.display="block";
        document.getElementById('maxscroll').style.display="none";
    }
    if(Math.abs(e.deltaY)>=100){
        curentspeen+=100;
        thisspeen=100;
    }
    else
   { 
    curentspeen+=Math.abs(e.deltaY);
    thisspeen = Math.abs(e.deltaY);
}
    setTimeout("curentspeen-= thisspeen; console.log('minus '+curentspeen);",1000);
   
    scroll.innerHTML=curentspeen+" px"
        if(curentspeen>maxspeen)
        {
            maxspeen=curentspeen;
        }
    } 
setInterval(check,100);
function check(){
    
    scroll.innerHTML=curentspeen +" px";
    if(curentspeen==0 || curentspeen==null){
        document.getElementById('scrollpx').style.display="none";
        document.getElementById('maxscroll').style.display="block";
        document.getElementById('showmax').innerHTML= "Твой максимальный рекорд<br>"+"(☞ﾟヮﾟ)☞ "+maxspeen +"px/s"+" ☜(ﾟヮﾟ☜)" +"<br>АШАЛЕТЬ КАКИЕ У ТЕБЯ БЫСТРЕ ПАЛЬЧИКИ !!!";       ////// ВОТ ТУТ ЧТО-ТО ПИШЕШЬ ЧТО ДОЛЖНО ПОЯВЛЯТЬСЯ ТИП "САМЫЙ АХУИТИТЕЛЬНЫЙ СКРОЛ" +maxspeen
       stopMusicScroll();
    }
}



function startAnimation(){
    for(i=0; i<8; i++){
        document.querySelectorAll('#Barchik')[i].classList.add('play');  
    }
}

function stopAnimation(){
    for(i=0; i<8; i++){
        document.querySelectorAll('#Barchik')[i].classList.remove('play');  
    }
}

// function start(){
//     if(bool ==  false){
//         stopMusic();
//     }
//     else if(bool == true){
//         playMusic();
//     }
// }

function playMusicScroll()
{ if(a=0)
    { Music.play(); }
   
  
    Music.play();
    Icon.src="./pause.png"
    startAnimation();
}

function stopMusicScroll(){
    Music.pause();
    Icon.src="./play.png";
    stopAnimation();
}
//  function playMusic(){
//  bool = false;
//     Music.play();
//     Icon.src="./pause.png";
//     startAnimation();
//  }
//  function stopMusic(){
//     bool = true;
//        Music.pause();
//        Icon.src="./play.png";
//        stopAnimation();
//     }
window.addEventListener('wheel', sum);