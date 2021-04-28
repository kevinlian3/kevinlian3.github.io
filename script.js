gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
// ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });

var videoElem = document.getElementById("fracking1");
// var videoElem2 = document.getElementById("frackingVid2");
var videoElemn3 = document.getElementById("frackingVid3");

ScrollTrigger.create({
    trigger: videoElem,
    onEnter: () => videoElem.play(),
    onEnter: () => videoElem.playbackRate = 0.9,
    onEnterBack: () => videoElem.play(),
    onLeave: () => videoElem.pause(),
    onLeaveBack: () => videoElem.pause(),
  });

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

ScrollTrigger.create({
  trigger: '#frackingExp1',
  start: 'top top',
  end: "+=1000px",
  pin: true,
  pinSpacing: false,
});

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#step-4",
    start:"top center",
    end:"+=1500px",
    pin:true,
    // markers:{
    //   startColor:"purple",
    //   endColor:"purple"
    // },
    pinSpacing: false,
    toggleActions: "play pause resume reset"
  }
});



tl.to('#frackingExp1',{opacity:0},0);
tl.to('#step-4',{opacity:1},0);
// tl.to("#frackingVid2",{opacity:1});

// ScrollTrigger.create({
//     trigger: videoElem2,
//     onEnter: () => videoElem2.play(),
//     onEnterBack: () => videoElem2.play(),
//     onLeave: () => videoElem2.pause(),
//     onLeaveBack: () => videoElem2.pause(),
//   });








const video = document.querySelector(".video-background");
let src = video.currentSrc || video.src;
console.log(video, src);

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video.play();
  video.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

const tl3 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#frackingVid3",
    start: "top top",
    end: "+=2000vh",
    pin:true,
    pinSpacing:true,
    scrub: true,
    // markers:{
    //   startColor:"green",
    //   endColor:"green"
    // }, 
  }
});

const tl4 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger:"#frackingVid3",
    start:"top top",
    scrub:false,
    // markers:{
    //   startColor:"blue",
    //   endColor:"blue"
    // },
    toggleActions: "play pause resume reset"
  }
});

// tl4.to('#frackingVid2',{opacity:0},0);
tl4.to('#frackingVid3',{opacity:1},0);

const tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:"#step-5",
    start:"top center",
    end:"+=2000px",
    pin:true,
    markers:{
      startColor:"black",
      endColor:"black"
    },
  }
});

gsap.to("#step-5",{visibility:"visible",opacity:1,
  scrollTrigger:{
    trigger:".purple",
    start:"top+=1000px top",
    markers:true,
  } 
});



// const tl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger:"#step-5",
//     start:"top center",
//     end:"+=3000px",
//     markers:{
//       startColor:"yellow",
//       endColor:"yellow"
//     },
//     pinSpacing: false,
//     toggleActions: "play pause resume reset"
//   }
// });


// tl5.to("#step-5",{visibility:visible});

once(video, "loadedmetadata", () => {
  tl3.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime: video.duration || 1
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
// setTimeout(function () {
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);

/* ---------------------------------- */




// var frame_count = 9,
//   offset_value = 100;

// gsap.to(".frackingExp", {
//   backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
//   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
//   scrollTrigger: {
//     trigger: ".orange",
//     start: "top top",
//     end: "+=" + (frame_count * offset_value),
//     pin: true,
//     scrub: true
//   }
// });

// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger:"#step-3",
//     start:"top bottom",
//     end:"+=760 px",
//     pin:true,
//     pinSpacing: true

//   }
// });

// tl.fromTo(".slideTwo", { xPercent: 100, x: 0}, {xPercent: 0, duration:2});
// //     // ...and the image the opposite way (at the same time)
// tl.fromTo(".slideTwo img", {xPercent: -100, x: 0}, {xPercent: 0, duration:2}, 0);


// gsap.utils.toArray(".comparisonSection").forEach(section => {
//   let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "center center",
//         // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
//         end: () => "+=" + section.offsetWidth, 
//         scrub: true,
//         pin: true,
//         anticipatePin: 1
//       },
//       defaults: {ease: "none"}
//     });
//   // animate the container one way...
//   tl.fromTo(section.querySelector(".slideTwo"), { xPercent: 100, x: 0}, {xPercent: 0})
//     // ...and the image the opposite way (at the same time)
//     .fromTo(section.querySelector(".slideTwo img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
// });


// gsap.utils.toArray(".comparisonSection").forEach(section => {
//   let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "center center",
//         // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
//         end: () => "+=" + section.offsetWidth, 
//         scrub: true,
//         pin: true,
//         anticipatePin: 1
//       },
//       defaults: {ease: "none"}
//     });
//   // animate the container one way...
//   tl.fromTo(section.querySelector(".slideTwo"), { xPercent: 100, x: 0}, {xPercent: 0})
//     // ...and the image the opposite way (at the same time)
//     .fromTo(section.querySelector(".slideTwo img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
// });

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
