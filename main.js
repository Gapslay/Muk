let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
var x = 11 ;
var max = 11;
var min = 0 ;
HangoutDelete();
SlidetoAnswerDisplay();

if(x==11) {CallDelete();
  SlidetoAnswerDelete();
  NextButtonDelete()
  PrevButtonDelete()
  TextCallDelete()
  TextMissDelete()}



next.addEventListener('click', function(){
    ResetAudio();
    Resetvalue();
    CallDisplay();
    HangoutDelete();
    SlidetoAnswerDisplay();
    buttoDelete()
    TextCallDelete()
  TextMissDelete()

    x++ ;
    if(x>max) x=0 ;

    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
   
})



prev.addEventListener('click', function(){
    ResetAudio();
    Resetvalue();
    CallDisplay();
    HangoutDelete();
    SlidetoAnswerDisplay();
    buttoDelete()
    TextCallDelete()
  TextMissDelete();
    x-- ;
    if(x<min) x=max ;

    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6

   
})

//number
var slider= document.getElementById("slider");
var val=document.getElementById("value");
val.innerHTML=slider.value;
slider.oninput=function(){
    val.innerHTML=this.value;
        if(val.innerHTML>80){
            if( x==0 ) {audio.play(); }
            if( x==1 ) {audio1.play(); }
            if( x==2 ) {audio2.play(); }
            if( x==3 ) {audio3.play(); }
            if( x==4 ) {audio4.play(); }
            if( x==5 ) {audio5.play(); }
            if( x==6 ) {audio6.play(); }
            if( x==7 ) {audio7.play(); }
            if( x==8 ) {audio8.play(); }
            if( x==9 ) {audio9.play(); }
            if( x==10 ) {audio10.play(); }
            if( x==11 ) {audio15.play(); }
            if( x==12 ) {audio12.play(); }
          //  const element = document.getElementsById("slider")
           // element.remove();
            CallDelete();
            SlidetoAnswerDelete();
            HangoutDisplay();
                   
        }
        else{
           ResetvalueDelay();
            
        }
}
//number

function EndAudio() {
  if( x==0 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }
  if( x==1 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }
  if( x==2 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==3 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==4 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==5 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==6 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==7 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==8 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }
 
  if( x==9 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==10 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }


  if( x==11 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

  if( x==12 ) {  
    setTimeout(() => {  ResetAudio();
                        HangoutDelete();
                        CallDisplay();
                        NextButtonDisplay();
                        PrevButtonDisplay();
                        SlidetoAnswerDisplay();
    } , 500);
  }

}



let butto = document.querySelector('.butto')  //ggap
butto.addEventListener('click', function(){

    audio11.play();

    PrevButtonDisplay();
    NextButtonDisplay();
    buttoDelete();
    TextCallDisplay(); 
    TextMissDisplay() 

})


let phone = document.querySelector('.phone') 
phone.addEventListener('click', function(){
    ResetAudio();
    HangoutDelete();
    CallDisplay();
    SlidetoAnswerDisplay();
    NextButtonDisplay();
    PrevButtonDisplay();
    SlidetoAnswerDisplay();
})





function ResetAudio() {
    if( x==0 ) {
        audio.pause(); 
        audio.currentTime = 0 ;
    }
    if( x==1 ) {
        audio1.pause(); 
        audio1.currentTime = 0 ;
    }
    if( x==2 ) {
      audio2.pause(); 
      audio2.currentTime = 0 ;
  }

  if( x==3 ) {
    audio3.pause(); 
    audio3.currentTime = 0 ;
  }
  if( x==4 ) {
    audio4.pause(); 
    audio4.currentTime = 0 ;
  }
  if( x==5 ) {
    audio5.pause(); 
    audio5.currentTime = 0 ;
  }
  if( x==6 ) {
    audio6.pause(); 
    audio6.currentTime = 0 ;
  }
  if( x==7 ) {
    audio7.pause(); 
    audio7.currentTime = 0 ;
  }
  if( x==8 ) {
    audio8.pause(); 
    audio8.currentTime = 0 ;
  }
  if( x==9 ) {
    audio9.pause(); 
    audio9.currentTime = 0 ;
  }
  if( x==10 ) {
    audio10.pause(); 
    audio10.currentTime = 0 ;
  }
  if( x==11 ) {
    audio11.pause(); 
    audio11.currentTime = 0 ;
    audio15.pause(); 
    audio15.currentTime = 0 ;
  }
  if( x==12 ) {
    audio12.pause(); 
    audio12.currentTime = 0 ;
  }

}


function ResetvalueDelay() {
    setTimeout(() => {  slider.value =0 ;
    } , 500);
    
}

function Resetvalue() {
    slider.value =0 ;
  
}

function Resetvalue() {
    slider.value =0 ;
  
}

function CallDelete() {
    var x = document.getElementById("slider");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

 
  }

  function CallDisplay() {
    var x = document.getElementById("slider");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function Misscall() {
    var x = document.getElementById("shine");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function HangoutDelete() {
    var x = document.getElementById("phone");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  
  function HangoutDisplay() {
    var x = document.getElementById("phone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function SlidetoAnswerDelete() {
    var x = document.getElementById("SlidetoAnswer");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function SlidetoAnswerDisplay() {
    var x = document.getElementById("SlidetoAnswer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

 
  function NextButtonDisplay() {
    var x = document.getElementById("next");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

   
  function NextButtonDelete() {
    var x = document.getElementById("next");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

   
  function PrevButtonDisplay() {
    var x = document.getElementById("prev");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

     
  function PrevButtonDelete() {
    var x = document.getElementById("prev");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }


  function buttoDelete() {
    var x = document.getElementById("butto");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }



  function buttoDelete() {
    var x = document.getElementById("butto");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  
  
  function TextCallDelete() {
    var x = document.getElementById("Call");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }


  function TextMissDelete() {
    var x = document.getElementById("Miss");
    if (x.style.display === "none") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }


  function TextCallDisplay() {
    var x = document.getElementById("Call");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

  function TextMissDisplay() {
    var x = document.getElementById("Miss");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  }

