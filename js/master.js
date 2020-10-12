// settings box configurations
document.querySelector('.icon').onclick = function(){
    document.querySelector('.icon i').classList.toggle('fa-spin');
    document.querySelector('.settings-box').classList.toggle('open');
};

// random background options
let rand_options = document.querySelectorAll('.settings-box .box button');
let background_random;

let state = localStorage.getItem('rand_background_state');
if(state == null | state == "true"){
    randomize_background();
    handleActive(rand_options[0], rand_options);
}
else
    handleActive(rand_options[1], rand_options);

rand_options.forEach(bt => {
    bt.addEventListener('click',(e) => {

        handleActive(e.target, rand_options);       // e.target = bt, y3ne mmkn astkhdm ay haga fehom

        let action = e.target.dataset.action;
        if(action == "true")
        {
            clearInterval(background_random);       // as it's initially active, it should be cleared first, then recalled
            randomize_background();
        }
        else
            clearInterval(background_random);

        localStorage.setItem('rand_background_state',action);
    });
});


// automatic change the background of header
let imgs = ["01.jpg","02.jpg","03.jpg","04.jpg"];
function randomize_background(){
    background_random = setInterval(() => {
    let r = Math.floor(Math.random() * imgs.length);
    document.querySelector('.header').style.background = `url("imgs/${imgs[r]}") no-repeat center center fixed`;
    },1000);
};

// website colors
let recentColor = localStorage.getItem('color');
const colorsList = document.querySelectorAll('.colors li');
if(recentColor != null){
    document.documentElement.style.setProperty('--main-color',recentColor);
    colorsList.forEach(color =>{
        if(color.dataset.color == recentColor){
            handleActive(color,colorsList);
        }
    });
}

colorsList.forEach(color => {
    color.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem('color',e.target.dataset.color);
        handleActive(color, colorsList);
    });
});


// progress bars auto fill
let progress_section = document.querySelector('.skills');
let progress_items = document.querySelectorAll('.item .progress-bar span');
window.onscroll = () => {
    if(this.pageYOffset == progress_section.offsetTop + progress_section.offsetHeight - this.innerHeight){
        progress_items.forEach(elem =>{
            elem.style.setProperty('width',elem.dataset.progress);
        });
    }
    else{
        progress_items.forEach(elem =>{
            elem.style.setProperty('width','0');
        });
    }
};


function handleActive(elem,list){
    list.forEach(e =>{
        e.classList.remove('active');
    })
    elem.classList.add('active');
};