
const slider = document.querySelector('.gallery');
const sliderImg = document.querySelectorAll('.gallery a');
const prevBtn= document.querySelector('#PrevB');
const nextBtn= document.querySelector('#NextB');

function openSideNav() { 
  document.getElementById("Sidenav").classList.add("sidenav_open");
  document.getElementById("OpenSidenav").style.display = "none";
  document.getElementById("CloseSidenav").style.display = "block";  
  console.log("open side nav")
}

function closeSideNav() {
  document.getElementById("Sidenav").classList.remove("sidenav_open");
  document.getElementById("OpenSidenav").style.display = "block";
  document.getElementById("CloseSidenav").style.display = "none";  
  console.log("close side nav")
}
let counter = 1;
const size = 480;
slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
let animation_ends = true;

nextBtn.addEventListener('click', ()=>{  
  if (!animation_ends) return;  
  console.log("prev");
  slider.style.transition ="transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = 'translateX('+(-size * counter) + 'px)';
  animation_ends = false;
});

prevBtn.addEventListener('click', ()=>{
  if (!animation_ends) return;  
  console.log("next");
  slider.style.transition ="transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = 'translateX('+(-size * counter ) + 'px)';
  animation_ends = false;  
});

slider.addEventListener('transitionend', ()=>{
  console.log("counter = " + counter);
  if (sliderImg[counter].id === 'Last_clone') {
    slider.style.transition = "none";
    counter = 5;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderImg[counter].id === 'First_clone') {
    slider.style.transition = "none";
    counter = 1;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  animation_ends = true;  
});
