const x = document.querySelector('.Add')
y = document.querySelector('.minus')
z = document.querySelector('.sum')

let a = 0

x.addEventListener('click', () => {
    a++;
    z.innerHTML = a
})

y.addEventListener('click', () => {
    if (a > 0) {
        a--;
        z.innerHTML = a
    }

})








