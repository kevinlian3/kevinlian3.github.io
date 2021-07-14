
gsap.registerPlugin(ScrollTrigger);

gsap.to('.titleText', {duration: 10, opacity:1})

gsap.utils.toArray('.step').forEach(step => {
  ScrollTrigger.create({
    trigger: step,
    start: 'top center',
    end: 'center top',
    toggleClass: 'active',
  });
});


var videoElemn = document.getElementById("frackingVid");
const video = document.querySelector(".video-background");

let src = video.currentSrc || video.src;
console.log(video, src);

const tl3 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".panel4",
    start: "top top",
    end: "+=2500vh",
    pin:true,
    pinSpacing:true,
    scrub: true,
    // markers:{
    //   startColor:"yellow",
    //   endColor:"yellow"
    // }, 
  }
});

ScrollTrigger.create({
  trigger: "#stepVid1",
  start: 'top top',
  end: '+=400vh',
  toggleClass: 'active',
  // markers:{
  //   startColor:"red",
  //   endColor:"red"
  // }, 
});

ScrollTrigger.create({
  trigger: "#stepVid1",
  start: '+=400vh',
  endTrigger:"#stepVid2",
  end: '+=200vh',
  toggleClass: {targets: "#stepVid2", className: "active"}, 
  // markers:{
  //   startColor:"green",
  //   endColor:"green"
  // }, 
});


ScrollTrigger.create({
  trigger: "#stepVid1",
  start: '+=600vh',
  endTrigger:"#stepVid3",
  end: '+=1600vh',
  toggleClass: {targets: "#stepVid3", className: "active"}, 
  // markers:{
  //   startColor:"blue",
  //   endColor:"blue"
  // }, 
});

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



