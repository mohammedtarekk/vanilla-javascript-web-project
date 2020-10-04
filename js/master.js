// automatic change the background of header
let imgs = ["01.jpg","02.jpg","03.jpg","04.jpg"];
setInterval(() => {
    let r = Math.floor(Math.random() * imgs.length);
    document.querySelector('.header').style.background = `url("imgs/${imgs[r]}") no-repeat center center fixed`;
},3000);

// settings box configurations
document.querySelector('.icon').onclick = function(){
    document.querySelector('.icon i').classList.toggle('fa-spin');
    document.querySelector('.settings-box').classList.toggle('open');
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

function handleActive(elem,list){
    list.forEach(e =>{
        e.classList.remove('active');
    })
    elem.classList.add('active');
};