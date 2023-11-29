const button = document.querySelector('botton.boton3');

const input = document.querySelector('.clipboard');

button.addEventListener('click',function(){
    boton3.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
})