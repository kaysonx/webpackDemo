import _ from 'lodash';
import './style.css'
import Img from './s.jpg';
import Data from './data.xml'


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
