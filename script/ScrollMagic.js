var controller = new ScrollMagic.Controller();

// init controller
var controller = new ScrollMagic.Controller();

// build scenes
new ScrollMagic.Scene({
triggerHook: "onLeave",
triggerElement: '.sec2',
offset: 0,
duration:"100%"
})
        .setTween(".sec2 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);


// new ScrollMagic.Scene({
//           triggerHook: "onLeave",
//           triggerElement: '.sec2',
//           offset: 0,
//           duration:"100%"
// })
// 					.setTween("#scroll-container > .sec2", {y: "0%", ease: Linear.easeNone})
// 					// .setTween("#scroll-container > .scrollContent1", {y: "-100%", 
//           // kokonannyo!!100%bunn,
//           // ueniittoru!
//           // ease: Linear.easeNone})
//           .addIndicators() // add indicators (requires plugin)
// 					.addTo(controller)
//           .setPin(".sec2");
 

// new ScrollMagic.Scene({
//           triggerHook: "onLeave",
//           triggerElement: ".sec6",
//           offset: 0,
//           duration: $(window).width()
//           })
//           .setTween("#scroll-container2 > .sec6", {y: "0%", ease: Linear.easeNone})
//           .setTween("#scroll-container2 > .scrollContent2", {y: "-100%", ease: Linear.easeNone})
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller)
//           .setPin(".sec6");