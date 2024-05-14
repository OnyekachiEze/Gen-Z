// function popout(){
//     document.getElementById('overlay').style.display = 'block'
// }
// function popin(){
//     document.getElementById('overlay').style.display = 'none'
// }

let coach = document.querySelector('.popout')
let don = document.querySelector('.popin')
coach.addEventListener('click', ()=>{
    document.getElementById('overlay').style.display = 'block'
})

don.addEventListener('click', ()=>{
    document.getElementById('overlay').style.display = 'none'
})