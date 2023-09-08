const mbar = document.querySelector('#mbar');
const menus = document.querySelector('#menus');

mbar.addEventListener('click', ()=>{
    if(menus.classList.contains('hidden')){
        menus.classList.remove('hidden');
    }else{
        menus.classList.add('hidden');
    }
})

//home side bar

const home = document.getElementById('home');
const ahome = document.getElementById('ahome');

home.addEventListener('click',()=>{
    if(ahome.classList.contains('border-white')){
        ahome.classList.remove('border-white');
        ahome.classList.add('border-primary');
        ahome.classList.add('font-bold');
    }else{
        ahome.classList.add('border-white');
        ahome.classList.remove('font-bold');
    }
})

// Contact side bar

const contact = document.getElementById('contact');
const acontact = document.getElementById('acontact');

contact.addEventListener('click',()=>{
    if(acontact.classList.contains('border-white')){
        acontact.classList.remove('border-white');
        acontact.classList.add('border-primary');
        acontact.classList.add('font-bold');
    }else{
        acontact.classList.add('border-white');
        acontact.classList.remove('font-bold');
    }
})

// About side bar


const about = document.getElementById('about');
const abt = document.getElementById('abt');

about.addEventListener('click',()=>{
    if(abt.classList.contains('border-white')){
        abt.classList.remove('border-white');
        abt.classList.add('border-primary');
        abt.classList.add('font-bold');
    }else{
        abt.classList.add('border-white');
        abt.classList.remove('font-bold');
    }
})