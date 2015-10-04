import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var app;

var state = {};

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);
