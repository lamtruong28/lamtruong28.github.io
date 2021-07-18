var header = document.getElementById ('header');
var menuMobile = document.querySelector('.menu-mobile');
var modal = document.querySelector('.modal');
var headerHeight = header.clientHeight;

window.addEventListener('scroll', function () {
    if(this.pageYOffset >140) {
        header.style.animation = 'headerFadeIn linear 0.4s';
        header.style.opacity = 1;
    }else {
        header.style.animation = null;
        header.style.opacity = null;

    }
})

//Đóng mở menu:
menuMobile.addEventListener('click', function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
        modal.style.display = 'block';
    }else {
        header.style.height = null;
        modal.style.display = null;
    }
})

//Tự động đóng khi chọn menu:
var menuItems = document.querySelectorAll('#header .nav-lists a');
for (var menuItem of menuItems) {
    menuItem.addEventListener('click', function () {
        header.style.height = null;
    })
}

//Đóng menu khi click vào modal:
modal.addEventListener('click',function() {
    header.style.height = null;
    this.style.display = null;
})











