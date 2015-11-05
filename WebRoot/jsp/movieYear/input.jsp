<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>

		<%@ include file="/jsp/common/cssJs.jsp"%>
		
		<title>搜影殿-电影年代</title>
		
	</head>

	<body>
		
		<div class="wrapper">
		
			<!-- 引入顶部页面 -->
			<jsp:include page="/jsp/common/top.jsp"></jsp:include>
			<!-- 引入左侧导航栏页面 -->
			<jsp:include page="/jsp/common/left.jsp"></jsp:include>
		
			<div class="wrap">
				<!-- main -->
				<div class="container-fluid">
					<div class="row">
						<!--middle_top_nav-->
						<div class="middle_top_nav">
							<a href="${ctx}/index">电影</a><a href="${ctx}/movieYear/list">年代列表</a><a href="javascript:;" class="active"><c:if test="${opera eq 'create'}">新增</c:if><c:if test="${opera ne 'create'}">修改</c:if>年代</a>
						</div>
						<!--/middle_top_nav-->
						<!--/middle_main-->
						<div class="middle_main from_style">
						 <!-- list_table -->
						 <form autocomplete="off" action="${ctx}/movieYear/save" method="post" class="form-horizontal">
						 	<input type="hidden" name="opera" value="${opera}">
						 	<input type="hidden" name="id" value="${id}">
							<div class="col-lg-12 col-md-12">
								<div class="form_box box_bg marginT20">
									<div class="tile-body">
										<div class="field_box input_width">
											<div class="row">
												<div class="col-lg-6 col-md-6 marginB10">
													<label>年代名：</label>
													<input style="width:160px;" placeholder="输入年代名" name="name" class="form-control required" type="text" value="${record.name}" >
												</div>
											</div> 
									  	</div>
									</div>
								</div>
									
								<div class="col-lg-12 col-md-12 text-left marginB26"><a onclick="submitForm(this);" class="submit btn-success" href="javascript:;">提交</a></div>
							  </div>
							</form>
							<!--/list_table-->
						</div>
					</div>
					<!--/middle_main-->
				</div>
			</div>
		</div>
		
		
		<script type="text/javascript">
			//表单提提交
			function submitForm(obj){ 
				if($('input[name=name]').val() == ''){
					util.error('请输入年代名！');
					return false;
				}
				
				$(obj).parents('form').submit(); 
			}	
		</script>
	</body>

</html>