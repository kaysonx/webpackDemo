import _ from 'lodash';
import './style.css'
import Img from './s.jpg';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);
    
    return element;
}

document.body.appendChild(component());
