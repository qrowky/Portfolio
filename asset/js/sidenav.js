var btn = document.querySelector('.menu_btn'),
    sideLeft = document.querySelector('.rectangle_left'),
    sideRight = document.querySelector('.rectangle_right'),
    underline0 = document.querySelector('.menu_btn_underline0'),
    underline1 = document.querySelector('.menu_btn_underline1'),
    underline2 = document.querySelector('.menu_btn_underline2'),
    pres = document.querySelector('#nav_menu_link_pres'),
    real = document.querySelector('#nav_menu_link_real'),
    contact = document.querySelector('#nav_menu_link_contact')

var eventbtn = btn.addEventListener('click', onClickBtn);
pres.addEventListener('click', onClickBtn);
real.addEventListener('click', onClickBtn);
contact.addEventListener('click', onClickBtn);


function onClickBtn() {
    
    leftClose = document.querySelector('.rectangle_left_open')
    if (leftClose != null) {
        //close sidenav
        sideLeft.classList.remove('rectangle_left_open');
        sideRight.classList.remove('rectangle_right_open');
        sideLeft.classList.add('rectangle_left_close--animation');
        sideRight.classList.add('rectangle_right_close--animation');

        underline0.classList.remove('menu_btn_underline0--animationOpen');
        underline1.classList.remove('menu_btn_underline1--animationOpen');
        underline2.classList.remove('menu_btn_underline2--animationOpen');
        underline0.classList.add('menu_btn_underline0--animationClose');
        underline1.classList.add('menu_btn_underline1--animationClose');
        underline2.classList.add('menu_btn_underline2--animationClose');
        

    } else {
        //open side
        sideLeft.classList.remove('rectangle_left_close');
        sideRight.classList.remove('rectangle_right_close');
        sideLeft.classList.remove('rectangle_left_close--animation');
        sideRight.classList.remove('rectangle_right_close--animation');
        sideLeft.classList.add('rectangle_left_open');
        sideRight.classList.add('rectangle_right_open');

        underline0.classList.remove('menu_btn_underline0--animationClose');
        underline1.classList.remove('menu_btn_underline1--animationClose');
        underline2.classList.remove('menu_btn_underline2--animationClose');
        underline0.classList.add('menu_btn_underline0--animationOpen');
        underline1.classList.add('menu_btn_underline1--animationOpen');
        underline2.classList.add('menu_btn_underline2--animationOpen');


    }

}

