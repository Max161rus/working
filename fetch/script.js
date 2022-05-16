'use strict';

const body = document.querySelector('body');
const btn = document.querySelector("button");
const button = document.querySelector('.two');
const inp = document.querySelector("input");
let i = localStorage.length + 1;

const obj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};


fetch('http://localhost:3000/one')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const a = document.createElement('h1');
        const b = data[0];
        
        console.log(b.name);
        a.textContent = b.name;
        body.append(a);
  });

const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
};

const getData =  (url) => {
  setTimeout(() => { 
        fetch(url)
            .then(response => {
            return response.json();
            })
            .then(data => {
            const b = data[data.length - 1];
            a.textContent = b.name;
            data.map((item, key) => {console.log(`${key}:${JSON.stringify(item)}`)});
        });
  },1000);
};

const a = document.createElement('h1');
body.append(a);

btn.addEventListener('click', () => {
  let user = {
    name: inp.value
  };
  if (inp.value === ""){
    alert('Ошибка! Поле ввода пустое!');
  } else {
  const json = JSON.stringify(user);

postData('http://localhost:3000/two', json)
      .then(data => {
          console.log(data);
      }).catch(() => {
          alert('NO');
      }).finally(() => {
          console.log("OK_OK");
      });

getData('http://localhost:3000/two');

localStorage.setItem(i, inp.value);
  i++;
      if (localStorage.length === 20){
        localStorage.clear();
        i = localStorage.length + 1;
      }
    }
});  

button.addEventListener('click', () => {
  postData('http://localhost:3000/two', JSON.stringify(obj))
  .then(data => {
      console.log(data);
  }).catch(() => {
      alert('NO');
  }).finally(() => {
      console.log("OK_OK");
  });
});


