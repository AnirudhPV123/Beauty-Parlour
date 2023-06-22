const sidenav = document.querySelector('#sidenav')
const style = getComputedStyle(sidenav)  //in this method we can call style directly from css file


function menubtn() {
    const right = style.right

    if (right == "-250px") {
        sidenav.style.right = "0px"
        document.getElementById("menu").src = "./Barber_Shop_img/close.png";
    } else {
        sidenav.style.right = "-250px"
        document.getElementById("menu").src = "./Barber_Shop_img/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
