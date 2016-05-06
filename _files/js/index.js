function setBackground(obj) {
    var as = document.getElementsByName('menu');
    for (var i = 0; i < as.length; i++) {
        $(as[i]).css("background-color", "#CD0104");
    }
    $("#" + obj).css("background-color", "#FB0005");
}















$(document).ready(function () {
	 marqueeStart(1, "left");
	 $("#index").css("background-color","#FB0005");
	 $(".yx-rotaion").yx_rotaion({auto:true}); //轮播图效果

	$('.myscroll').myScroll({
		speed: 40, //数值越大，速度越慢
		rowHeight: 26 //li的高度
	});

  });
  					
					
					
					
					
					
					
					
					
