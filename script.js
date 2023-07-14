const btn = document.querySelector('button')
const body = document.querySelector('body')
const color = ['pink','black','red','grey','yellow','purple']
// add even listener
body.style.backgroundColor = 'green';
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});