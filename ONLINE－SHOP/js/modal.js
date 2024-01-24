$(function(){
    // 変数に要素を入れる
    var open = $('.open');
    var close = $('.modal-close');
    var container = $('.modal-container');
   
    // モーダルウィンドウを表示
    open.on('click',function(){
        container.css({
        display:block
      });
    });
    //closeボタンをクリックしたらモーダルウィンドウを閉じる
    close.on('click',function(){
      container.removeClass('active');
    });
   
    //モーダルウィンドウの外側をクリックしたらモーダルウィンドウを閉じる
    $(document).on('click',function(e) {
      if(!$(e.target).closest('.modal-body').length) {
        container.removeClass('active');
      }
    });
  });