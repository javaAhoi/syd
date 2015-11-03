<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>
		
		<title>首页</title>
		
		<%@ include file="/jsp/common/cssJs.jsp"%>
		
		
	</head>

	<body>
		<div class="wrapper">			
			
			<!-- 引入顶部页面 -->
			<jsp:include page="/jsp/common/top.jsp"></jsp:include>
			<!-- 引入左侧导航栏页面 -->
			<jsp:include page="/jsp/common/left.jsp"></jsp:include>
			
			<!-- main -->
			<div class="wrap">			
				<div class="container-fluid">
					<div class="row">
						<!--middle_top_nav-->
						<!--/middle_top_nav-->
						<div class="middle_main marginT50 index_item_box">
							<div class="row">
								<a href="${ctx}/movie/list">
									<div class="col-lg-4 col-md-4 col-sm-12">
										<div class="tile-head tile-green">
											<h2>查看列表</h2>
										</div>
										<div class="tile-body li_green">
											查看所有电影图文列表
										</div>
									</div>
								</a>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="tile-head tile-orange">
										<h2>新增电影</h2>
									</div>
									<div class="tile-body li_green">
										填写新的电影资源信息
									</div> 
								</div>
								<div class="col-lg-4 col-md-4 col-sm-12">
									<div class="tile-head tile-blue">
										<h2>更多功能</h2>
									</div>
									<div class="tile-body li_green">
										功能正在建设中...
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		
			
		
		
		

		<script type="text/javascript">
			var arrs=[];
			$(function(){
				//遍历元素获取高度组成一个arrs数组
				$(".middle_main").find(".tile-body").each(function(i){
					arrs.push($(this).height());
				});
				//给元素设置高度
				$(".tile-body").height(getMax2(arrs));
			})
			//返回一个数组中最大的值
			function getMax2(arr){
			    return Math.max.apply(null,arr);
			}
		</script>
		
	</body>

</html>