const toggle = document.getElementById("toggle"),
        menu = document.getElementById("menu")

toggle.addEventListener('click', e => {
    toggle.classList.toggle("bx-x")
    menu.classList.toggle("show")
})

const destination = document.querySelectorAll('#destination')
console.log(destination)
function colorLink(){
    if (destination){
        destination.forEach(l => l.classList.remove('active'))
        this.classList.add('active')

    }
}

destination.forEach(l => l.addEventListener('click', colorLink))