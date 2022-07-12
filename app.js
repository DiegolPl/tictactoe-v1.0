let btnStart = document.getElementById('btnStart');
let contBienvenida = document.querySelector('.container_bienvenida')
let username;

btnStart.addEventListener('click',()=>{
    contBienvenida.classList.toggle('none');
    username = document.getElementById('user_name').value;
})


