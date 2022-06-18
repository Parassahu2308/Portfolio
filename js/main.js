AOS.init();

// FIXED NAVBAR
// const navHeight = navbar.getBoundingClientRect().height;
// window.addEventListener('scroll',  () => {
//     const scrollHeight = window.pageXOffset;
//     if(scrollHeight > navHeight)
//     {
//         navbar.classList.add("navbar-fixed");
//     }
//     else
//     {
//         navbar.classList.remove("navbar-fixed");   
//     }
// });

new TypeIt("#text1", {
    speed: 120,
    loop: true,
})
.type("Web Designer", {
    delay: 400
})
.pause(500)
.delete(9)

.type(" Developer", {
    delay: 400
})
.pause(500)
.delete(9)

.go();


new TypeIt("#text2", {
    speed: 120,
    loop: true,
})
.type("Web Designer", {
    delay: 400
})
.pause(500)
.delete(9)

.type(" Developer", {
    delay: 400
})
.pause(500)
.delete(9)

.go();

// GSAP
gsap.from(".logo",{opacity: 0, duration:1, delay:0.5, y:-10});
gsap.from(".navbar",{opacity:0, duration:1, delay:1, y:20});
gsap.from(".nav-items",{
    opacity: 0,
     duration:1,
      delay:1.2,
       y:30,
       stagger:0.2
    });
    gsap.from(".icons",{
        opacity: 0,
         duration:1,
          delay:1.2,
           y:30,
           stagger:0.2
        });
gsap.from(".skills-bar",{opacity:0, duration:1, delay:1, x:10});