// let hamburgerIcon = document.querySelector('#hamburger_icon')
// let nav = document.querySelector('#nav')
// let h3 = document.querySelector('h3')
// let mainIconDiv = document.querySelector('.main_icon')
// hamburgerIcon.addEventListener('click',function(){
//     hamburgerIcon.src = (hamburgerIcon.src==='http://127.0.0.1:5500/collapse%20menu/hamburger.png'?'http://127.0.0.1:5500/collapse%20menu/close.png':'http://127.0.0.1:5500/collapse%20menu/hamburger.png')
//     h3.style.display = h3.style.display==='none'?'block':'none'
//     mainIconDiv.style.gap = mainIconDiv.style.gap==='1rem'?'3rem':'1rem'
//     nav.style.width = (nav.style.width==='100px'?'300px':'100px')
// })

let hamburgerIcon = document.querySelector('#hamburger_icon');
let nav = document.querySelector('#nav');
let h3 = document.querySelectorAll('h3');
let chromeIcon = document.querySelector('#main_icon_img')
let mainIconDiv = document.querySelector('.main_icon');
let p = document.querySelector('p')
mainIconDiv.style.gap = '2.4rem'
hamburgerIcon.addEventListener('click', function() {
    // Toggle hamburger icon source
     
    hamburgerIcon.src = (hamburgerIcon.src === 'http://127.0.0.1:5500/collapse%20menu/hamburger.png' ? 'http://127.0.0.1:5500/collapse%20menu/close.png' : 'http://127.0.0.1:5500/collapse%20menu/hamburger.png');
    
    nav.style.transition = ' .6s ease';
    nav.style.width = (nav.style.width === '50px' ? '260px' : '50px');
    chromeIcon.style.display = nav.style.width==='50px'?'none':'block';
    p.style.transition = ' .6s ease'
    p.style.left = nav.style.width==='50px'?'60px ':'270px';
    h3.forEach(function(ele){
        ele.style.transition = '.6s ease';
        ele.style.display = (ele.style.display === 'none' ? 'block' : 'none');
        ele.style.whiteSpace=  'nowrap';
        
    })
    
    mainIconDiv.style.transition = ' .6s ease';
    mainIconDiv.style.gap = (mainIconDiv.style.gap === '2.4rem' ? '1.9rem' : '2.4rem');
    
    
});

