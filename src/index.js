import _ from 'lodash';
import './assets/style.css';
import John from './assets/garfield.gif';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = John;

    element.appendChild(myIcon);

    const btn = document.createElement('button');
    btn.textContent = 'Click me and check console'
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());