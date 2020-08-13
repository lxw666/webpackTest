import _ from 'lodash';
import webpackNumbers from 'webpack-library-lxw-example';
import '@/index.css';
import icon from '@/img/bbbb.png';
import Print from '@/print';

function component() {
	var ele = document.createElement('div');
	var img = new Image();
	var button = document.createElement('button');
	console.log('process.env.NODE_ENV',process.env.NODE_ENV);
	img.src = icon;
	button.innerHTML = 'Click me and look at the console!';
	ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
	ele.classList.add('font-color');
	ele.onclick = (e) => {
		var num = webpackNumbers.numToWord(3);
		Print.call(null, 'Hello webpack!!' + num);
		/* 懒加载：即用即加载 */
		import(/* webpackChunkName: "printMe" */ './printMe')
		.then(module => { 
			module.printMe();
		})
	};
	ele.appendChild(button);
	ele.appendChild(img);
	return ele;
}
let childEle = component();
document.body.appendChild(childEle);
if (module.hot) {
	module.hot.accept('./printMe.js', function() {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(childEle);
		childEle = component();
		document.body.appendChild(childEle);
	})
}
