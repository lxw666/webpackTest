import _ from 'lodash';
import './index.css';
import icon from './img/hot_icon.png';

function component() {
	var ele = document.createElement('div');
	var img = new Image();
	console.log(icon)
	img.src = icon;
	ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
	ele.classList.add('font-color');
	ele.appendChild(img);
	return ele;
}
document.body.appendChild(component());
/* "explorer.file.status.modified": "orange",
		"explorer.file.status.untracked": "gray",
		"explorer.file.status.added": "greeen",
		"explorer.file.status.conflicted": "red" */
