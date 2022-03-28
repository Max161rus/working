'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

      inputRub.addEventListener('input', () => { // можно также применить событие 'change', срабатывает тогда когда инпут уходит из фокуса
            const request = new XMLHttpRequest();//создали экземпляр объекта
            //методы объекта request
            //request.open(method, url, async, login, pass);//собирает настройки которые помогут в будущем сделать запрос

            request.open('GET', 'js/current.json');

            //http заголовки

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.send(); //метод запроса

            //свойства объекта request
            //status
            //statusText
            //response 
            //readyState

            //события
            // request.addEventListener('readystatechange',() => {
            //     if (request.readyState === 4 && request.status ===200){
            //         console.log(request.response);
            //         const data = JSON.parse(request.response);
            //         console.log(data);
            //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            //     }else {
            //         inputUsd.value = "Что то пощло не так";
            //     }
            // });

            request.addEventListener('load',() => {
                if (request.status ===200){
                    console.log(request.response);
                    const data = JSON.parse(request.response);
                    console.log(data);
                    inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
                }else {
                    inputUsd.value = "Что то пощло не так";
                }
            });
      });