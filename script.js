function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle') 
    let headerList = document.querySelector('.header-list')
    menuToggle.classList.toggle('active')
    headerList.classList.toggle('active')
}