const full_back=document.querySelector(".full-back");
const nav=document.querySelector("nav");
const logo1=document.querySelector(".logo1");
const hamburger=document.querySelector(".hamburger");
const hamburger_line1=document.querySelector(".hamburger-line1");
const hamburger_line2=document.querySelector(".hamburger-line2");
const hamburger_line3=document.querySelector(".hamburger-line3");
const body= document.querySelector("body");

hamburger.addEventListener("click",()=>{
 full_back.classList.toggle("open");
 nav.classList.toggle("open");
 logo1.classList.toggle("open");
 hamburger_line1.classList.toggle("open");
  hamburger_line2.classList.toggle("open");
  hamburger_line3.classList.toggle("open");
  body.classList.toggle("open");
  hamburger.classList.toggle("open");
});
full_back.addEventListener("click",()=>{
  full_back.classList.remove("open");
  nav.classList.remove("open");
  logo1.classList.remove("open");
  hamburger_line1.classList.remove("open");
   hamburger_line2.classList.remove("open");
   hamburger_line3.classList.remove("open");
   body.classList.remove("open");
   hamburger.classList.remove("open");
 });


  // BBBが選ばれる理由（スライド左）
  $('.online').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('online-slide');
    }
  });
  // BBBが選ばれる理由（スライド右）
  $('.teacher').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('teacher-slide');
    }
  });
  // 受講生の声（ふきだし）
  $('.voice').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass('voice-animetion');
    }
  });




