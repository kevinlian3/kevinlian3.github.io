gsap.registerPlugin(ScrollTrigger);

var videoElem = document.getElementById("fracking1");
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
    start:"top 65%",
    end:"+=600px",
    pin:true,
    scrub:true,
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
tl.to('#step-45 ',{color:"white"},0);
tl.to('#step-4',{backgroundColor:"black",duration:5},0);



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
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video.play();
          video.pause();
        });

        video.setAttribute("src", blobURL);
        video.currentTime = t + 0.01;
      });
  }
}, 1000);

/* ---------------------------------- */


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



gsap.to('#frackingVid3',{opacity:1, scrollTrigger: {
    trigger:"#frackingVid3",
    start:"top top",
    // markers:{
    //   startColor:"blue",
    //   endColor:"blue"
    // },
    toggleActions: "play pause resume reset"
  }
});

const tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:"#step-5",
    start:"top 30%",
    end:"+=800px",
    pin:true,
    // markers:{
    //   startColor:"black",
    //   endColor:"black"
    // },
    toggleActions: "play pause resume reset"
  }
});

gsap.to("#step-5",{visibility:"visible",opacity:1,
  scrollTrigger:{
    trigger:".purple",
    start:"top+=200px top",
    // markers:true,
    toggleActions: "play pause resume reset"
  } 
});

const tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:"#step-6",
    start:"top 30%",
    end:"+=1000px",
    pin:true,
    // markers:{
    //   startColor:"black",
    //   endColor:"black"
    // },
    toggleActions: "play pause resume reset"
  }
});

gsap.to("#step-6",{visibility:"visible",opacity:1,
  scrollTrigger:{
    trigger:".purple",
    start:"top+=550px top",
    // markers:true,
    toggleActions: "play pause resume reset"
  } 
});

const tl7 = gsap.timeline({
  scrollTrigger:{
    trigger:"#step-7",
    start:"top 30%",
    end:"+=500px",
    pin:true,
    // markers:{
    //   startColor:"black",
    //   endColor:"black"
    // },
    toggleActions: "play pause resume reset"
  }
});


gsap.to("#step-7",{visibility:"visible",opacity:1,
  scrollTrigger:{
    trigger:".purple",
    start:"top+=650px top",
    // markers:true,
    toggleActions: "play pause resume reset"
  } 
});

/* Horizontal Sexction */ 

let sections = gsap.utils.toArray(".horizpanel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontalScroll",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".horizontalScroll").offsetWidth
  }
});


/* Pipeline Video */ 

const tl8 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".panel5",
    start: "top top",
    end: "+=2000vh",
    pin:".panel5",
    pinSpacing:true,
    scrub: true,
    // markers:{
    //   startColor:"green",
    //   endColor:"green"
    // }, 
  }
});


const video2 = document.querySelector(".video-background2");
let src2 = video2.currentSrc || video2.src;
console.log(video2, src2);

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
  video2.play();
  video2.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

once(video2, "loadedmetadata", () => {
  tl8.fromTo(
    video2,
    {
      currentTime: 0
    },
    {
      currentTime: video2.duration || 1
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video.play();
          video.pause();
        });

        video.setAttribute("src", blobURL);
        video.currentTime = t + 0.01;
      });
  }
}, 1000);


function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});





