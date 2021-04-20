gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
// ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });


gsap.utils.toArray('.step').forEach(step => {
  ScrollTrigger.create({
    trigger: step,
    start: 'top 80%',
    end: 'center top',
    toggleClass: 'active',
    id: 'toggle-active-class'
  });
});

ScrollTrigger.create({
  trigger: '#fracking1',
  endTrigger: "#step-2",
  start: 'center center',
  end: "+=761px",
  pin: true,
  pinSpacing: false,
  // markers:true,
  id: 'chart-pin'
});

// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });


//Animation of the Fracking Image1 

// let tl = gsap.timeline({
// 	scrollTrigger:{
// 		trigger:".red",
// 		start:"center bottom"
// 	}
// });

// tl.from("#fracking1", {x:-200,opacity:0, duration:1.5})


// Animateion TextBox1 

// let boxtl = gsap.timeline({scrollTrigger:{
//   trigger:".red",
//   start:"center bottom",
//   end:"+=1000px",
//   toggleActions:"restart none none none",
//   pin:true,
// }}).from("#box1", {duration:1,ease:"back",y:300,opacity:0})
// .to("#box1",{opacity:0,y:-300})


// Animation TextBox2

// let boxt2 = gsap.timeline({scrollTrigger:{
//   trigger:"#orange-content",
//   start:"top top",
//   end:"+=1000px",
//   toggleActions:"restart none none none",
//   // markers:true
// }})
// .from("#box2", {duration:1,ease:"back",y:300,opacity:0});
