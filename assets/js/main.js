const form = document.querySelector('form');
const msg = document.querySelector('.msg');
const tasks = document.querySelector('#task');
const ul = document.querySelector('.list-group');

form.addEventListener('submit', todoApp);

function todoApp(e){

    if(tasks.value===''){
        msg.innerHTML='Please enter a task';
        msg.classList.add('error')

        setTimeout(function(){
            msg.remove()
        },2500)
    }else{

        const li = document.createElement('li');
        li.className='list-group-item';
        
        li.appendChild(document.createTextNode(`${tasks.value}`));
        ul.appendChild(li);

        msg.innerHTML='Added a new task';
        msg.classList.add('success')

        setTimeout(function(){
            msg.remove()
        },2500)

        tasks.value=''
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u2612");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        const close = document.getElementsByClassName("close")
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
    }


    e.preventDefault()
}

// Add a checked symbol and strikethrough
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// display mode: dark or loight 

const dm = document.querySelector('#dm');
const lm = document.querySelector('#lm');

dm.addEventListener('click',function(){
const forms= document.querySelector('.form');
const card= document.querySelector('.card');

card.style.backgroundColor='grey'
card.style.color='white'
forms.style.backgroundColor='grey'

})
lm.addEventListener('click',function(){
const forms= document.querySelector('.form');
const card= document.querySelector('.card');

card.style.backgroundColor='white'
card.style.color='black'
forms.style.backgroundColor='white'

})

