//scroll_effect
  if(window.matchMedia('(max-width:767px)').matches){
    //スマホ
    $(window).on('load', function(){

    })
    $(window).scroll(function () {
      var scrollAnimationElm = document.querySelectorAll('.scroll_up');
      var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
          var triggerMargin = 100;
          if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('on');
          }
        }
      }
      window.addEventListener('load', scrollAnimationFunc);
      window.addEventListener('scroll', scrollAnimationFunc);
    });
  }else if(window.matchMedia('(min-width:768px)').matches){
    //パソコン
    $(window).scroll(function () {
      var scrollAnimationElm = document.querySelectorAll('.scroll_up ,.scroll_left , .scroll_right');
      var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
          var triggerMargin = 100;
          if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('on');
          }
        }
      }
      window.addEventListener('load', scrollAnimationFunc);
      window.addEventListener('scroll', scrollAnimationFunc);
    });
  }