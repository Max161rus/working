'use strict';

//console.log(document.head);
//console.log(document.documentElement);
console.log(document.body.childNodes); // узлы которые являются детьми у body
// console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
//console.log(document.body.lastElementChild);

//console.log(document.querySelector('#current').parentNode.parentNode); // получить родителя у дочернего элемента
//console.log(document.querySelector('#current').parentElement.parentElement.parentElement);


//console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получение data - атрибута

for (let node of document.body.childNodes){
    
    if(node.nodeName == "#text"){
        continue;
     }
     console.log(node);
}