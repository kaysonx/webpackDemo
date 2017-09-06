import _ from 'lodash';
import 'Base/style.css'
import Img from 'Base/s.jpg';
import Data from 'Base/data.xml'

import print from './print';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg);

    console.log(Data);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = print;
    element.appendChild(btn);

    return element;
}

var element = component();
document.body.appendChild(element);


if(module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated print module!');
        print();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}