$(function(){


//表示非表示ボタン
	$('#show-photos').on('click', () => {
	$('.appear').fadeToggle(150)
});


//画像を単体で表示
	$(".single").colorbox({
		maxWidth: "90%",
		maxHeight: "90%",
		opacity: 0.7
});


//スライドショー
	$(".gallery").colorbox({
		rel:'slideshow',
		slideshow: false, //自動スライドしない設定
		slideshowSpeed: 3000,
		maxWidth: "90%",
		maxHeight: "90%",
		opacity: 0.7
});


//スムーススクロール
$('a[href^="#"]').click(function(){
    var speed = 250; //スクロールの速さ
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


//戻るボタン
	var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });


});
