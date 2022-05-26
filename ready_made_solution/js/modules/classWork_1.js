function classWork1(){

    const body = document.querySelector('body');

    const div = document.createElement('div');

    const objUrl = {
	
        "Рисунок 1": {
            img: '1.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 2": {
            img: '2.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 3": {
            img: '3.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 4": {
            img: '4.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 5": {
            img: '5.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 6": {
            img: '6.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 7": {
            img: '7.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 8": {
            img: '8.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 9": {
            img: '1.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 10": {
            img: '2.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 11": {
            img: '3.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 12": {
            img: '4.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 13": {
            img: '5.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 14": {
            img: '6.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 15": {
            img: '7.jpg',
            width: '100px',
            height: '80px'
            },
        "Рисунок 16": {
            img: '8.jpg',
            width: '100px',
            height: '80px'
            }
        
    };

    class NewElement{
	
        // принимаем объект с данными
            
            constructor(textCont, classElementParent){
                
                this.textCont = textCont; 
                
                this.classElementParent = classElementParent;
                
                this.render(this.parenContainer(), this.processingObj());
                
            }
            
        // метод обработки данных
        
            processingObj () {
                
                let data = Object.entries(this.textCont);
                    
                const heading = data.map(item => item[0]); // названия изображений
                
                const url = data.map(item => item[1].img); // url
                
                const width = data.map(item => item[1].width); // ширина изображения
                
                const height = data.map(item => item[1].height); // высота изображения
                
                return data = [heading, url, width, height]; //выходной массив с массивами данных	
                        
            }
            
        // создаем родительский DIV
            
            parenContainer() { 
                
                const div = document.createElement('div'),
                      body = document.querySelector('body');
                      
                if(localStorage.getItem('color')){
                    body.style.backgroundColor = localStorage.getItem('color');
                } else {
                    body.style.backgroundColor = "Lavender";
                }	  
                      
                div.classList.add(this.classElementParent);
                
                div.style.display = 'flex';
                
                body.prepend(div); 
                
                return div;
                 
            }
            
        // рендерим изображения на страницу
            
            render(div, data) {		
                
            for(let i = 0; i < data[3].length; i++){
                
                let random = '';
                
                if(!parseInt(data[1][i])){
                
                while(random > 8 || random == 0) {
                    random = Math.round((Math.random()*10));
                } 
                
                }
                
                console.log(random);
                
                dataRead(data[0][i], random + data[1][i], data[2][i], data[3][i], div);
                
            };
            
            const img = document.querySelectorAll('img');
                
            img.forEach(item => {
                
                item.addEventListener('mouseenter', () => {
                    
                    item.style.width = '250px';
                    item.style.height = '170px';
                    item.style.transition = '1s all';
                
                });
                
                item.addEventListener('mouseout', () => {
                    
                    item.style.width = '100px';
                    item.style.height = '80px';
                    item.style.borderRadius = '0%';
                
                });
                
                item.addEventListener('click', () => {
                    
                    let color = Math.round(Math.random() * 16777215).toString(16);
                    
                    if (color.length < 6){
                        let index = 6 - color.length;
                        for(let i = 0; i <= index; i++){
                            color = (color + Math.round(Math.random() * 10)).substr(0, 6);
                            
                        }  
                    }
                    localStorage.setItem('color','#' + color);
                    body.style.backgroundColor = '#' + color;
                
                });
                
            });
                
                
            function dataRead (textCont, url, width, height, div) {	
                
                const divChilde = document.createElement('div');
                    
                divChilde.innerHTML = `
                
                <p style="color: white">${textCont}
                
                    <img src = "${url}" width = "${width}" height = "${height}"/>
                
                </p>
                
                `;
                
                div.append(divChilde);	
                        
            }	
                
            }	
            
        }
               
        let newImg = new NewElement(objUrl, 'parentContainer_1');
            newImg = new NewElement(objUrl, 'parentContainer_2');
            newImg = new NewElement(objUrl, 'parentContainer_3');
            newImg = new NewElement(objUrl, 'parentContainer_4');
            newImg = new NewElement(objUrl, 'parentContainer_5');
    
}

module.exports = classWork1;