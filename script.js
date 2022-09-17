const menu = document.querySelector('.menu');
const close = document.querySelector('.icon-img')
const icon = document.querySelector('.icon');
menu.onclick = function() {
  icon.classList.remove('sm')
}
close.onclick = function() {
  icon.classList.add('sm')
};
document.addEventListener('click', (event) => {
  if(event.target.className == 'click') {
   let b = event.target.nextElementSibling;
    b.classList.toggle('rotate');
    const c = event.target.parentElement.nextElementSibling;
    c.classList.toggle('sm')
  }
  if(event.target.className == 'show') {
   let b = event.target.nextElementSibling;
    b.classList.toggle('rotate');
    const c = b.nextElementSibling;
    c.classList.toggle('lg')
  }
  
})