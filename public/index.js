const mbar = document.querySelector('#mbar');
const menus = document.querySelector('#menus');

mbar.addEventListener('click', ()=>{
    if(menus.classList.contains('hidden')){
        menus.classList.remove('hidden');
    }else{
        menus.classList.add('hidden');
    }
})

