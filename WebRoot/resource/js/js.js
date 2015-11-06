$(function(){
	/** 左边导航的高度 **/
	$(window).resize(function() {
		var LH = $("zx_left").height();
		var WH = $(window).height();
		if (LH < WH) {
			$(".zx_left_nav").height(WH - 68);
		} else {
			$(".zx_left_nav").height(LH);
		}
	});
	var LH = $("zx_left").height();
	var WH = $(window).height();
	if (LH < WH) {
		$(".zx_left_nav").height(WH - 68);
	} else {
		$(".zx_left_nav").height(LH);
	}

	$(".nav_hr").height();

	/******** 美化导航滚动条  *********/
	if ($.fn.niceScroll) {
		$("#nav").niceScroll({
			cursorcolor: "#aa000000",
			zindex: 999999,
			bouncescroll: !0,
			cursoropacitymax: .4,
			cursorborder: "",
			cursorborderradius: 0,
			cursorwidth: "7px",
			railalign: "left",
		});
	}
	
	
	$(".gray_border .table tbody tr td:last-child").css({
		"border-right": "1px solid #DFE5E9"
	});
	$(".right_info_context li:last-child").css({
		"border-left": "none"
	});
	$(".right_info_context li:last-child .box_process .left_dot").css({
		"margin-left": "-4px"
	});
	/**点击 左边的icon导航展开和收起 **/

	$(".zx_left_nav .zx_left_nav_box_title").click(function() {
		if ($(this).hasClass("current")) {
			$(this).removeClass("current");
			$(this).next("div.zx_left_nav_box_list").stop(true, false).slideUp('fast');
		} else {
			$(this).addClass("current");
			$(this).next("div.zx_left_nav_box_list").stop(true, false).slideDown('fast');
		}
	});
	
	
	
	//初始化checkbox和radio为icheck
	if ($.fn.iCheck) {
		$(":checkbox, :radio").iCheck({
			checkboxClass: 'icheckbox',
			checkboxClass: 'icheckbox_flat-green',
			radioClass: 'iradio_flat-green',
		});
	}
});



