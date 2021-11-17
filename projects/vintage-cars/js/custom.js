var $nav = $(".gallery");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $(function () {
        $(document).scroll(function () {
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(".bookonline").click(function(){
  $(".vintage-logo h1").toggleClass("vintage-color");
});