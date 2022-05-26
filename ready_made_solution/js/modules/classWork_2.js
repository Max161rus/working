function classWork2(){

const body = document.querySelector('body');

const div = document.createElement('div');

const objUrl1 = {
	
	"Рисунок 1": {
		img: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__480.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 2": {
		img: 'https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016__340.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 3": {
		img: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 4": {
		img: 'https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186__340.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 5": {
		img: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956__340.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 6": {
		img: 'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 7": {
		img: 'https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 8": {
		img: 'https://images.pexels.com/photos/3576112/pexels-photo-3576112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 9": {
		img: 'https://images.pexels.com/photos/4623061/pexels-photo-4623061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 10": {
		img: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 11": {
		img: 'https://images.pexels.com/photos/386015/pexels-photo-386015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 12": {
		img: 'https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 13": {
		img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 14": {
		img: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 15": {
		img: 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		},
	"Рисунок 16": {
		img: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		width: '100px',
		height: '80px'
		}
	
};

const objUrl2 = {
	
	"Рисунок 1": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 2": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 3": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 4": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 5": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 6": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 7": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 8": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 9": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 10": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 11": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 12": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 13": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 14": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 15": {
		img: '.jpg',
		width: '100px',
		height: '80px'
		},
	"Рисунок 16": {
		img: '.jpg',
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

let	newImg1 = new NewElement(objUrl2, 'parentContainer_6');
	newImg1 = new NewElement(objUrl2, 'parentContainer_7');
	newImg1 = new NewElement(objUrl2, 'parentContainer_8');
	newImg1 = new NewElement(objUrl2, 'parentContainer_9');
	newImg1 = new NewElement(objUrl2, 'parentContainer_10');
}

module.exports = classWork2;