// require('!style!css!./style.css');
// webpack .\entry.js bundle.js --module-bind 'css=style!css'
require('./style.css');

document.write('It works');
document.write(require('./content.js'));

if (true) {
    debugger
    console.log('debug');
}