let burger = document.getElementsByClassName('bars')[0],
    menu = document.getElementsByClassName('top-nav')[0],
    $place_list = document.querySelectorAll('header ul li');
let hoverMenu = true,
    windowWidth;

burger.addEventListener('click',function (event){
    
    if (hoverMenu){
        menu.classList.add('d-block')
        hoverMenu = false
        windowWidth = window.innerWidth
        console.log(windowWidth)
    }
    else {
        menu.classList.remove('d-block')
        hoverMenu = true
    }
})


console.log(window.screen.width)
if (window.innerWidth <= 768) {
    for (let i = 0; i < $place_list.length; i++){
        $place_list[i].addEventListener('mousemove', (event)=>{
            $place_list[i].setAttribute('class', 'point')
            $place_list[i].style.marginLeft = '-15.9px'
        })
        $place_list[i].addEventListener('mouseout', (event)=>{
            $place_list[i].removeAttribute('class')
            $place_list[i].style.marginLeft = '0px'
        })
    }
}