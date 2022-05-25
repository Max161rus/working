'use strict';
const btn = document.querySelector(".btn"),
      elem = document.querySelector('.box');
let pos = 0;
    //  function myAnimation(){
    //      const elem = document.querySelector('.box');
    //      let pos = 0;
    //      const id = setInterval(frame, 10);
    //      function frame(){
    //          if (pos == 300){
    //              clearInterval(id);
             
    //          } else {
    //             pos++;
    //              elem.style.top = pos + "px";
    //              elem.style.left = pos + "px";
    //          }
    //      }
    //  }

    function ower(){
        pos--;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
        if(pos > 0){
            requestAnimationFrame(ower);
        }
    }


     function myAnimation(){

            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

            if (pos < 300){
                requestAnimationFrame(myAnimation);
            }else{
                requestAnimationFrame(ower);
            }
        
        
    }
    

     btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

    let id = requestAnimationFrame(myAnimation);
    cancelAnimationFrame(id);
    
    
 

