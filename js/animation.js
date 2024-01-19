$(document).ready(function () {
  // スクロールアニメーションの対象要素を取得
  var scrollAnimationElm;
  
  if (window.matchMedia('(max-width:767px)').matches) {
    // スマホ用の要素
    scrollAnimationElm = document.querySelectorAll('.scroll_up');
  } else if (window.matchMedia('(min-width:768px)').matches) {
    // パソコン用の要素
    scrollAnimationElm = document.querySelectorAll('.scroll_up, .scroll_left, .scroll_right');
  }

  // スクロールアニメーションの実行関数
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  };

  // ウィンドウが読み込まれたときのイベント
  $(window).on('load', scrollAnimationFunc);

  // スクロール時のイベント
  $(window).scroll(scrollAnimationFunc);
});