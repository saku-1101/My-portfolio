
const navBtn=document.querySelector('#js-navBtn');
const navBox=document.querySelector('#js-navBox');
const navClose=document.querySelector('#js-navClose');
const barBtn=document.querySelector('#js-barBtn');
const Hnoscroll=document.querySelector('#js-header');
const arryBar=document.getElementsByClassName('js-bar');
// クラスを配列として取得
// console.log(arryBar);
const arryBarjq=document.querySelector(".js-bar-jq");
const arryBarjs=document.querySelector(".js-bar-js");
const arryBarpy=document.querySelector(".js-bar-py");
const arryBarc=document.querySelector(".js-bar-c");
const loadBox=document.querySelector('#js-loading');
const secAnimate=document.getElementsByClassName("animate");// スクロールアニメーションの要素




// loadingのアニメーション
window.onload=()=>{   // ページを読み込んだら
 loadBox.classList.add('loaded'); 
}

// navのアニメーション
addEventListener("DOMContentLoaded", function() {
  navBtn.addEventListener("mouseover", function() {
    this.classList.toggle("nav-btn-hover");
  });
  navBtn.addEventListener("click", function() {
    this.classList.toggle("nav-btn-active");
    navBox.classList.toggle("nav-box-active");
    Hnoscroll.classList.toggle("no-scroll");

    // Wrap every letter in a span
var textWrapper = document.querySelectorAll('.nav-a-en');
for (let i = 0; i < textWrapper.length; i++) {
  const title = textWrapper[i];
  title.innerHTML =title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.nav-a-en .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    })
  
}

  });
  navBtn.addEventListener("DOMFocusIn", function() {
    this.classList.toggle("nav-btn-focus");
  });
  navClose.addEventListener("mouseover", function() {
    this.classList.toggle("nav-close-hover");
  });
  navClose.addEventListener("click", function() {
    this.classList.toggle("nav-close-active");
    navBox.classList.remove("nav-box-active");
    navBtn.classList.remove("nav-btn-active");
    Hnoscroll.classList.remove("no-scroll");
  });


  // barのアニメ～ション
  barBtn.addEventListener("click", function() {
    for (let i = 0; i < arryBar.length; i++) {
      const el = arryBar[i];
      el.classList.toggle("bar-active");
    }
    arryBarjq.classList.toggle("bar-jq-ac");
    arryBarjs.classList.toggle("bar-js-ac");
    arryBarpy.classList.toggle("bar-py-ac");
    arryBarc.classList.toggle("bar-c-ac");
    this.classList.toggle("bar-btn-clicked");
    console.log(this);
    if (barBtn.innerHTML ==='Thank you🎈') {
      barBtn.innerHTML = 'Click Here and<br>Check My Level!';
   } else {
      barBtn.innerHTML ='Thank you🎈';
   };
  });
  
});

// スクロールしたらsection要素をふわっと表示
document.addEventListener("scroll",()=> {
  for (let secIndex = 0; secIndex < secAnimate.length; secIndex++) {
    const sectionTop = secAnimate[secIndex].getBoundingClientRect().top + secAnimate[secIndex].clientHeight * 0.3;
    
  //  $secAnimation[secIndex].clientHeight * 0.1;によって、要素のtopが画面にぴったり入ったではなく、要素の10％文は行ったときがsectiontopとなる。
    if (innerHeight > sectionTop) {
      secAnimate[secIndex].classList.remove("sec-animate");// スクロールしたら要素アニメーション
      
      secAnimate[secIndex].classList.remove("txt-animate"); // スクロールしたら文字アニメーション
      
      secAnimate[secIndex].classList.remove("txt-animate-late"); // スクロールしたら文字アニメーション

      
    };
    const slickTOP=secAnimate[secIndex].getBoundingClientRect().top + secAnimate[secIndex].clientHeight * 1.0;

    if(innerHeight>slickTOP){
      secAnimate[secIndex].classList.remove("animate-from-right"); // スクロールしたら右からslickアニメーション
    }
  };
});







// .move-textのアニメーション
var textWrapper = document.querySelector('.move-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop:false})
  .add({
    targets: '.move-text .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 500 + 30 * i
  }) 
  // .add({
  //   targets: '.heart',
  //   transform:scale(1),
  //   easing: 'easeOutExpo'
  // })


// .bound-textのアニメーション
  anime.timeline({loop: false})
  .add({
    targets: '.bound-text .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.bound-text .bang',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.bound-text',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000 //このアニメーションの継続時間
  }) .add({
    targets: '.bound-text .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  });

