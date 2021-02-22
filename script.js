console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#orange",
  start: "top top", 
  end: "+=300px",
  pin: "#step-1"
});

ScrollTrigger.create({
  trigger: "#red",
  start: "top top", 
  end: "+=400", // 200px past the start 
  pin: "#red-content"
});


//

let bodyEl = document.body;

function intro(){
  
  ///SHIP///
  
  let shipTofish = gsap.timeline();
  
  shipTofish
  .from('#ship',{x: -100,duration: 1.5})
  // .from(bodyEl,{scale: 1.5, transformOrigin: "top", duration: 2.6},"<")

  let fishingAction = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    scrub: 1,
    start: "top top",
    end: "bottom bottom",
    // markers: true,
  }})
  .set("#esa-rope", {drawSVG: 0}, 0)
  .from("#esa-rope", {drawSVG: 0}, 0)


  ///SMOKE///
  
  let smoke = gsap.timeline({repeat: -1,});

 smoke.from(".ship-smoke",{
    duration: 2,
    scale: 0,
    transformOrigin: "center center",
    stagger:{each: 0.6},
  })
  .to(".ship-smoke",{
   opacity: 0
 });
  
}
intro();



///ROCK ON SIDES///

gsap.to("#rock-left-w, #rock-right-w, #rock-right-w1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }, 
});

gsap.to("#rock-right-b1, #rock-right-b, #rock-left-b", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }, 
});






///WATER///

let waterTl = gsap.timeline({repeat: -1, yoyo: true, ease: "power1.inOut"});



waterTl
.to('.water-btm',{x:20, duration: 3},0)
.to('.water-mid',{x:-30, duration: 3},0)
.to('.water-top',{x:-40, duration: 4},0)
.to(".water-btw",{x:-30, duration: 2},0);


//BUBBLES//

let bub1 = gsap.timeline();
// let bub2 = gsap.timeline();

gsap.to('#bubbles4, #bubbles1',{x:-100, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut",});

bub1
  .set("#bubbles4, #bubbles1",{
  y: 500,
  opacity: 0.8,
})
  .to("#bubbles4, #bubbles1", {
  opacity: 0,
  y: -200,
  scale:0.8,
  duration: 15, 
  repeat: -1,
  ease: "power1.inOut",
  // motionPath:{
  //   path: "#bub-line",
  //   align: "#bub-line",
  //   alignOrigin: [0.5, 0.5],
  //   start: 0.5,
  //   end: 0.9
  // }
});


