import _ from 'lodash';
import './index.css';
import icon from './img/hot_icon.png';
import printMe from './printMe.js';

function component() {
	var ele = document.createElement('div');
	var img = new Image();
	console.log(icon)
	img.src = icon;
	ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
	ele.classList.add('font-color');
	ele.onclick = printMe;
	ele.appendChild(img);
	return ele;
}
document.body.appendChild(component());
