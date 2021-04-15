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


//Fracking Animation
///SHIP///

// let shipTofish = gsap.timeline({scrollTrigger:{
//   trigger:"#red",
//   start:"bottom 50%",
//   end:"+=300px",
//   toggleActions:"restart none none none"
//   // markers:true
// }})
// .from("#ship",{x: -100,duration: .5},0)
// .from("#ground-b",{yPercent:50,duration:1},0)
// .from("#ground-m",{yPercent:0,duration:.75},0)
// .from("#ground-f",{yPercent:50,duration:.5},0)


// let fishingAction = gsap.timeline({defaults: {duration: 1},
// scrollTrigger: {
//   trigger: "#svg",
//   scrub: true,
//   scrub: 1,
//   start: "top top",
//   end: "bottom bottom"
//   // markers: true,
// }})
// .set("#esa-rope", {drawSVG: 0, delay:.01}, 0)
// .from("#esa-rope", {drawSVG: 0}, 0)


// MotionPathHelper.create("#esa-rope");

  ///SMOKE///
  
// let smoke = gsap.timeline({repeat: -1,});

//  smoke.from(".ship-smoke",{
//     duration: 2,
//     scale: 0,
//     transformOrigin: "center center",
//     stagger:{each: 0.6},
//   })
//   .to(".ship-smoke",{
//    opacity: 0
//  });
  



///ROCK ON SIDES///

// gsap.to("#rock-left-w, #rock-right-w, #rock-right-w1", {
//   yPercent: 10,
//   ease: "none",
//   scrollTrigger: {
//     scrub: true
//   }, 
// });



// //BUBBLES//

// let bub1 = gsap.timeline();
// // let bub2 = gsap.timeline();

// gsap.to('#bubbles4, #bubbles1',{x:-100, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut",});

// bub1
//   .set("#bubbles4, #bubbles1",{
//   y: 500,
//   opacity: 0.8,
// })
//   .to("#bubbles4, #bubbles1", {
//   opacity: 0,
//   y: -200,
//   scale:0.8,
//   duration: 15, 
//   repeat: -1,
//   ease: "power1.inOut",

// });

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


// Map
  
// set initial states
// gsap.timeline() 
//     .set('#scrollDist', {width:'100%', height:'500%'})
//     .set('#containerMap', {width:7900, height:5600, transformOrigin:'0 0', left:window.innerWidth/2, top:window.innerHeight/2})
//     .from('#containerMap', {opacity:0, ease:'power1.inOut', duration:1}, 0.3)

// //tween the svg path + circle
// gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{
//     trigger:'#scrollDist', 
//     start:'top top', 
//     end:'bottom bottom'
//     // markers:true
//   }}) 
//     .to('#c', {motionPath:'#p', immediateRender:true, duration:10}, 0)
//     .from('#p', {drawSVG:'0 0', duration:10}, 0)

//move container to follow circle
// let povDelay = 0.1, 
//     pos = { x:-3847, y:-2753 },
//     xSet = gsap.quickSetter('#containerMap', "x", "px"),
//     ySet = gsap.quickSetter('#containerMap', "y", "px");

// gsap.ticker.add(() => {  
//   pos.x += (-gsap.getProperty('#c', 'x') - pos.x) * povDelay;
//   pos.y += (-gsap.getProperty('#c', 'y') - pos.y) * povDelay;
//   xSet(pos.x);
//   ySet(pos.y);
// });

// window.onresize = ()=> { gsap.set('#containerMap', {left:window.innerWidth/2, top:window.innerHeight/2}); }



