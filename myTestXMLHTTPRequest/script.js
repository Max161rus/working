'use strict';

const input = document.querySelector('input'),  
                btn = document.querySelectorAll('button');


      

      btn[0].addEventListener('click', () => { 
            const request = new XMLHttpRequest();
            

            request.open('GET', 'my.json');

            

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // что из себя представляет инфа запроса

            request.send(); //метод запроса, отправляем запрос

            

            request.addEventListener('load',() => {
                if (request.status ===200){
                    
                    const data = JSON.parse(request.response);

                    input.value = input.value * 2;
                   
                    
                }else {

                    input.value = "Ебать!!!";
                    
                }
            });
      });

      const forms = document.querySelector('form');

      

      btn[1].addEventListener('click', () => {

            const req = new XMLHttpRequest();

            req.open('POST', 'server.php');

            req.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(forms);

            const object = {};

            formData.forEach((value, key) => {
                object[key] = value;
            });

            console.log(object);

            const json = JSON.stringify(object);

            req.send(json);

            req.addEventListener('load', () => {
                if (req.status === 200){
                    console.log(req.response);
                    setTimeout(() => {
                            forms.reset();
                    }, 3000);
                }
            });

      });