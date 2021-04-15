console.clear();
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, MotionPathHelper);
gsap.defaults({ease: "none"});


gsap.registerPlugin(ScrollTrigger);


let boxtl = gsap.timeline({scrollTrigger:{
  trigger:"#orange",
  start:"top top",
  end:"+=1000px",
  toggleActions:"restart none none none",
  pin:true,
  //pinSpacking:true
  // markers:true
}})
.from("#orange-content", {duration:1,ease:"back",y:300,opacity:0})


let boxt2 = gsap.timeline({scrollTrigger:{
  trigger:"#orange-content",
  start:"top top",
  end:"+=1000px",
  toggleActions:"restart none none none",
  // markers:true
}})
.from("#orange-content2", {duration:1,ease:"back",y:300,opacity:0});

// ScrollTrigger.create({
//   trigger: "#red",
//   start: "top top", 
//   end: "+=400", // 200px past the start 
//   pin: "#red-content",
//   pinSpacing:true
// });


ScrollTrigger.create({
  trigger: "#lightblue",
  start: "top top", 
  end: "+=1600", // 200px past the start 
  pin: "#lightblue",
  pinSpacing:true
  // markers:true
});




// Slides

gsap.utils.toArray(".comparisonSection").forEach(section => {
  let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
        end: () => "+=" + section.offsetWidth, 
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: {ease: "none"}
    });
  // animate the container one way...
  tl.fromTo(section.querySelector(".afterImage"), { xPercent: -100, x: 0}, {xPercent: 0})
    // ...and the image the opposite way (at the same time)
    .fromTo(section.querySelector(".afterImage img"), {xPercent: 100, x: 0}, {xPercent: 0}, 0);
});




