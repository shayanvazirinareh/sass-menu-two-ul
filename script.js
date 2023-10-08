let BtnHumber=document.querySelector('.menu-humberger');
let body=document.querySelector('.body');
let ulHeader=document.querySelector('.ul-header');
let slider=document.querySelector('.slider');
let flag=false;
BtnHumber.addEventListener('click',()=>{
    if(!flag){
        flag=true;
        slider.style.right='49%';
        slider.style.transition='1s';
        ulHeader.style.right='1%';
        ulHeader.style.transition='1.1s';

    }else{
        flag=false;
        slider.style.right='-50%';
        ulHeader.style.right='-50%';
    }

})