console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});


gsap.registerPlugin(ScrollTrigger);

let boxtl = gsap.timeline({scrollTrigger:{
  trigger:"#orange",
  start:"top top",
  end:"+=500px",
  toggleActions:"restart none none none",
  pin:true,
  pinSpacking:true,
  markers:true
}})
.from("#orange-content", {duration:1,ease:"back",y:300,opacity:0})


let boxt2 = gsap.timeline({scrollTrigger:{
  trigger:"#orange-content",
  start:"top top",
  end:"+=100px",
  toggleActions:"restart none none none",
  markers:true
}})
.from("#orange-content2", {duration:1,ease:"back",y:300,opacity:0});

ScrollTrigger.create({
  trigger: "#red",
  start: "top top", 
  end: "+=400", // 200px past the start 
  pin: "#red-content",
  pinSpacing:true
});

//Fracking Animation

///SHIP///
  
let shipTofish = gsap.timeline({scrollTrigger:{
  trigger:"#red",
  start:"bottom 50%",
  end:"+=300px",
  toggleActions:"restart none none none",
  markers:true
}})
.from("#ship",{x: -100,duration: .5},0)
.from("#ground-b",{yPercent:50,duration:1},0)
.from("#ground-m",{yPercent:0,duration:.75},0)
.from("#ground-f",{yPercent:50,duration:.5},0)


let fishingAction = gsap.timeline({defaults: {duration: 1},
scrollTrigger: {
  trigger: "#svg",
  scrub: true,
  scrub: 1,
  start: "top top",
  end: "bottom bottom",
  markers: true,
}})
.set("#esa-rope", {drawSVG: 0, delay:.01}, 0)
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
  



///ROCK ON SIDES///

gsap.to("#rock-left-w, #rock-right-w, #rock-right-w1", {
  yPercent: 10,
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

});

// Map
  
window.onload = ()=>{

// set initial states
gsap.timeline() 
    .set('#scrollDist', {width:'100%', height:'500%'})
    .set('#containerMap', {position:'fixed', width:7900, height:5600, transformOrigin:'0 0', left:window.innerWidth/2, top:window.innerHeight/2})
    .from('#containerMap', {opacity:0, ease:'power1.inOut', duration:1}, 0.3)

//tween the svg path + circle
gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'#scrollDist', start:'top top', end:'bottom bottom', scrub:1}}) 
    .to('#c', {motionPath:'#p', immediateRender:true}, 0)
    .from('#p', {drawSVG:'0 0'}, 0)

//move container to follow circle
let povDelay = 0.1, 
    pos = { x:-3847, y:-2753 },
    xSet = gsap.quickSetter('#containerMap', "x", "px"),
    ySet = gsap.quickSetter('#containerMap', "y", "px");

gsap.ticker.add(() => {  
  pos.x += (-gsap.getProperty('#c', 'x') - pos.x) * povDelay;
  pos.y += (-gsap.getProperty('#c', 'y') - pos.y) * povDelay;
  xSet(pos.x);
  ySet(pos.y);
});

window.onresize = ()=> { gsap.set('#containerMap', {left:window.innerWidth/2, top:window.innerHeight/2}); }

}

