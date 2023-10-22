const input=document.getElementById('input-box')
const ul =document.getElementById('list-box')

function addTask(){
const li=document.createElement('li')
li.innerHTML=input.value 
ul.appendChild(li)
input.value=''
const checkbox=document.createElement('input')
checkbox.type='checkbox'
li.appendChild(checkbox)

const button=document.createElement('button')
button.innerHTML='x'
li.appendChild(button) 
} 
ul.addEventListener('click',function(){

    if(event.target.tagName==='BUTTON'){
        event.target.parentElement.remove()
    }
})