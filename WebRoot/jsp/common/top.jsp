<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>


<script type="text/javascript">

/**
 * 修改密码
 */
function updatePassword(){
	var $form = $('form.update-pwd'); 
	
	var _old = $form.find('input[name=oldpassword]').val();
	var _new = $form.find('input[name=newpassword]').val();
	
	if(_old == '' || _new == ''){
		util.error('输入不能为空！');
		return false;
	}
	
	
	$.ajax({
		type : 'get',
		url : $form.attr('action'),
		data : $form.serialize(),
		success : function(data){
				if(data.flag){
					$form.find('input[name=oldpassword]').val('');
					$form.find('input[name=newpassword]').val('');
					$('.password-error-msg').text('');
					
					//关闭弹框
					$form.find('.btn_refuse').click();
					$('.modal-scrollable').hide()
					$('.modal-backdrop').hide();
					util.success(data.msg); 
				}else{ 
					$('.password-error-msg').text(data.msg);
				}
				
			},
		error : function(){
				$('.password-error-msg').text('服务器连接错误，请稍候再试！');
			},
	}); 
}

</script>

<div class="top sys">
	<div class="top_logo">
		<a href="javascript:;"></a>
	</div>
	<div class="top_right">
		<div class="sign_info">
			<img src="${ctx}/resource/images/user_male.png" />
			<div class="sign_name">用户：<span>${user.fullname }</span>
				<br/><a data-toggle="modal" data-target="#dialog-password" href="#">[修改密码]</a>&nbsp;&nbsp;<a href="${ctx}/login">[退出]</a>
			</div>
		</div> 
	</div>
</div> 


 


<!-- 修改密码弹出窗 -->
<div class="modal fade" id="dialog-password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog modal-sm" role="document">
		<form class="update-pwd" action="${ctx}/hr/user/resetOrUpdatePassword" method="post">
			<input type="hidden" name="username" value="${user.username}" />
			<div class="modal-content white_bg">
				<div class="modal-header dialog_header_bg">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span><img src="${ctx}/resource/images/ic_close.png"/></span>
					</button> 
					<h4 class="modal-title white">修改密码</h4> 
				</div>
				<div class="modal-body white_bg padding20" style="padding:20px 20px 0 20px;overflow:hidden;">  
					<div class="marginB10"><label>原密码：</label><input placeholder="请输入原密码" style="display:inline;width:150px;" class="form-control" type="password" name="oldpassword" value="" /></div>
					<div class="marginB10"><label>新密码：</label><input placeholder="请输入新密码" style="display:inline;width:150px;" class="form-control" type="password" name="newpassword" value="" /></div>
					<div class="text-align-center"><label style="font-size: 14px;color:red;" class="password-error-msg"></label></div>
				</div> 
				<div class="modal-footer white_bg btn_group">
					<a style="padding:12px 20px;" class="btn_through" href="javascript:updatePassword();" >修改</a>
					<a style="padding:12px 20px;" class="btn_refuse" href="javascript:;" data-dismiss="modal">取消</a>
				</div>
			</div>
		</form>
	</div>
</div>

