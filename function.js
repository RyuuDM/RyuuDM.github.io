const pop = document.getElementById('popup')
const side = document.getElementById('sidebar')
const userC = document.getElementById('userCC')

function toggleS(){

    pop.style.display = 'none'
}
function closeSidebar(){

    side.classList.toggle('show')
}
function userCard(){
    userC.classList.toggle('show');
}