// // nav scroll background --------------------
// window.addEventListener('scroll', navScrolled)

// function navScrolled(){
//   let nav = document.querySelector('#header');
//   let windowScroll = window.scrollY
//   if(windowScroll < 150) {
//     nav.classList.remove('bgcolor-scrollrd');
//   } else {
//     nav.classList.add('bgcolor-scrollrd');
//   }
// }

// nav bgcolor change when scrolled
function navScrolled(){
  let nav = document.querySelector('#header');
  let hero = document.querySelector('.hero');

  // if want to control when to shift (optional)
  let heroOptions = {
    rootMargin: '-760px 0px 0px 0px'
  };

  // the main intersection observer
  let heroObserver = new IntersectionObserver(function(entries, heroObserver){
    entries.forEach(entry => {
      // console.log(entry.target);
      // if not intersecting add classList
      if(!entry.isIntersecting){
        nav.classList.add('bgcolor-scrollrd');
      } else {
        // if intersecting remove classList
        nav.classList.remove('bgcolor-scrollrd');
      }
    })

    // if you want to control when to shift (optional)
  }, heroOptions);

  heroObserver.observe(hero);
}
navScrolled();



function scrollReveal(){
  // common reveal options to create reveal animation
  ScrollReveal({
    // reset: true,
    distance: '200px',
    duration: 3000,
    delay: 200
  });
  
  // target elements and specify options 
  // the hero animation --------------------
  ScrollReveal().reveal('.p1', { delay: 100, origin: 'top'});
  ScrollReveal().reveal('.p2 h1', { delay: 500, origin: 'right'});
  ScrollReveal().reveal('.p2 h3', { delay: 500, origin: 'left'});
  ScrollReveal().reveal('.start-btn', { delay: 800, origin: 'bottom'});
  
  // the hero why animation--------------------
  ScrollReveal().reveal('.element', { delay: 300, origin: 'bottom', interval: 400});
  ScrollReveal().reveal('.gallery', { delay: 900, origin: 'left'});


  // the hero steps animation --------------------
  ScrollReveal().reveal('.lists li', { delay: 1400, origin: 'right', interval: 400});
  ScrollReveal().reveal('.p1 h4', { delay: 500, origin: 'right'});
  ScrollReveal().reveal('.lists-finale', { delay: 1800, origin: 'top'});
  ScrollReveal().reveal('.vid', { delay: 400, origin: 'bottom'});


  // the hero blog animation --------------------
  ScrollReveal().reveal('.blog-title h1', { delay: 200, origin: 'right'});
  ScrollReveal().reveal('.blog-title h2', { delay: 200, origin: 'left'});
  ScrollReveal().reveal('.blog-element', { delay: 100, origin: 'bottom', interval: 400});
  ScrollReveal().reveal('.to-the-blog', { delay: 2500, origin: 'right'});

}

scrollReveal();

// vid play function ----------------------------------
const vid = document.querySelector('.vid')

let observer = new IntersectionObserver((entries, observer) => {
  // logic
  entries.forEach(entries => {
    if(entries.isIntersecting){
      vid.play();
    }
  })
})
observer.observe(vid);

















// why section animation ---------------------
// window.addEventListener('scroll', reveal)

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for (var i = 0; i < reveals.length; i++) {

//     var windowheight = window.innerHeight;
//     var revealTop = reveals[i].getBoundingClientRect().top;
//     var revealPoint = 0;

//     if (revealTop < windowheight - revealPoint) {
//       reveals[i].classList.add('active');
//     } else {
//       reveals[i].classList.remove('active');  
//     }
//   }
// }

// steps section animation ---------------------

// window.addEventListener('scroll', listFade)

// function listFade(){
//   var lists = document.querySelectorAll('.p2 li');
//   lists.forEach((list, index) => {
//     if(list.style.animation){
//       list.style.animation = '';
//     } else {
//       list.style.animation = `listsFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//     }
//   })
// }
// var lists = document.querySelectorAll('.p2 li');
// console.log(lists)