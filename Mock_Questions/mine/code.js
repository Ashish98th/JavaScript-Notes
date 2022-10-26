const username=document.querySelector('#username')
const email=document.querySelector('#email')
const number=document.querySelector('#number')

const handleinput=function(giveninput){
    const inputId=giveninput.id;

    if(inputId==='username'){
email.value='';
number.value='';

    }else if(inputId==='email'){
        username.value='';
        number.value='';

    }else{
        email.value='';
        username.value='';
    }
}

username.addEventListener('keyup',function(event){
    if(event.key==='Enter') alert(`seacrhing with name:${this.value}`)
})

email.addEventListener('keyup',function(event){
    if(event.key==='Enter') alert(`seacrhing with email:${this.value}`)
})

number.addEventListener('keyup',function(event){
    if(event.key==='Enter') alert(`seacrhing with number:${this.value}`)
})