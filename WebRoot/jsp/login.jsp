<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>
		
		<title>搜影殿后台</title>
		
		<!-- 系统css -->
		<link rel="stylesheet" href="${ctx}/resource/css/bootstrap.min.css">
		<!-- 自定义 css -->
		<link rel="stylesheet" href="${ctx}/resource/css/login.css">
		
		<!-- 系统js -->
		<script type="text/javascript" src="${ctx}/resource/js/jquery.min.js"></script>
		
	</head>

	<body>
		<div class="signin">
			<div class="signin-head"><img src="${ctx}/resource/images/ic_user_head.png" alt=""></div>
			<form autocomplete="off" class="form-signin" action="${ctx}/user/dologin">
				<input name="username" type="text" class="form-control" placeholder="用户名" required autofocus />
				<input name="password" type="password" class="form-control" placeholder="密码" required />
				<button class="btn btn-lg btn-warning btn-block" type="button" id="login-btn">登录</button>
				<div style="text-align: center;margin-top: 15px;color: red;font-size: 14px;">
					<label class="tips"></label>
				</div>
			</form>
		</div>

		<script type="text/javascript">
			$('#login-btn').click(function(){
				$.ajax({
					type : 'get',
					url  : $('form').attr('action'),
					data : $('form').serialize(),
					success : function(result){
						if(result != ''){
							$('.tips').text(result);
						}else{
							window.location.href = '${ctx}/index';
						}
					}
				});
				
				
			});
			
			
			//登录框定位
			$(function(){
				var left_px = (document.body.clientWidth-$('.signin').width())/2;
				var top_px = (document.body.clientHeight-$('.signin').height())/2;
				$('.signin').css('left', left_px).css('top',top_px);
			});

		</script>
		
	</body>

</html>