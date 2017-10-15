;(function(){
  var footerImgs=document.getElementById('imgsBox')
                         .getElementsByTagName('img');
  var marquee=document.getElementById('imgsBox');
  imgBig(footerImgs,marquee);

  function imgBig(objs,target){
    $(objs).hover(function() {
      $(this).animate({width:'+=10', height: '+=10'}, 100);
      target.stop();
    }, function() {
        $(this).animate({width:'-=10', height: '-=10'}, 100);
        target.start();
    });
  }
})();
