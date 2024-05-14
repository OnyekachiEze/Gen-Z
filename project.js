let project = document.querySelector('.media')
function slide(){
    project.classList.toggle('slideout')
}

function popout(){
    document.getElementById('overlay').style.display = 'block'
}

function popin(){
    document.getElementById('overlay').style.display  = 'none'
}