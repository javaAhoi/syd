<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>

		<%@ include file="/jsp/common/cssJs.jsp"%>

		<title>电影-年代列表</title>
		
		<style type="text/css">
			#custom-toolbar1 select,#custom-toolbar2 select,#custom-toolbar3 select,#custom-toolbar4 select{display: inline-block; float: left; width:178px; margin-right: 20px; margin-top: 10px;}
			#custom-toolbar1 input,#custom-toolbar2 input,#custom-toolbar3 input,#custom-toolbar4 input{display: inline-block; float: left; width: 178px; margin-right: 20px;  margin-top: 10px;}
			td{text-align: center;} 
		</style>
	</head> 

	<body>
		
		<div class="wrapper">
		
			<!-- 引入顶部页面 -->
			<jsp:include page="/jsp/common/top.jsp"></jsp:include>
			<!-- 引入左侧导航栏页面 -->
			<jsp:include page="/jsp/common/left.jsp"></jsp:include>
		
			<div class="wrap">
				<div class="container-fluid">
					<div class="row">
						<!--middle_top_nav-->
						<div class="middle_top_nav">
							<a href="${ctx}/index">电影</a><a href="javascript:;" class="active">年代列表</a>
						</div>
						<div class="middle_main paddingLR10 marginB26">
							<div class="col-lg-12 col-md-12">
						    	<div id="custom-toolbar1">
							    	<form action="${ctx}/movieYear/list" method="post">
							    		<input type="text" class="form-control" name="search_movieYear_name" value="${search_movieYear_name}" placeholder="输入年代名搜索" />
								    	<input type="submit" value="检索" style="width: auto;" class="btn btn-success marginT10" />
								    	<a href="${ctx}/movieYear/input?opera=create" style="width: auto;" class="btn btn-success marginT10 marginL20">新增年代</a>
							    	</form>
								</div> 
								<div class="tile-body marginTf20">
									<table data-toggle="table" data-toolbar="#custom-toolbar1" data-pagination="true" data-page-size="15">
										<thead>
											<tr>
										        <th data-align="center" data-width="100">序号</th>
										        <th data-align="center" data-width="30%">年代名</th>
										        <th data-align="center" data-width="30%">创建时间</th>
										        <th data-align="center" data-width="30%">操作</th>
											</tr>
										</thead>
										<tbody class="tbody-div">
											
											<c:forEach items="${list}" var="record" varStatus="sta">
												<tr>
													<td>${sta.index+1 }</td>
													<td>
														<a title="点击修改" href="${ctx}/movieYear/input?id=${record.id}">${record.name }</a>
											 		</td>
													<td>
														<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${record.create_time }"/>
													</td>
													<td>
														<a href="${ctx}/movieYear/input?id=${record.id}">修改</a>
														<a href="javascript:;" class="del-btn" data-id="${record.id}">删除</a>
													</td>
												</tr>
											</c:forEach>
										
										</tbody>
									</table>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<script type="text/javascript">
		
			//删除操作
			$(function(){
				$('.del-btn').click(function(){
					if(window.confirm('确认删除吗？')){
						var id = $(this).attr('data-id');
						$.ajax({
							type : 'post',
							url : '${ctx}/movieYear/delete?id='+id,
							success : function(result){
								if(result){
									util.success('删除成功！');
									window.location.href = '${ctx}/movieYear/list';
								}else{
									util.error('删除失败！');
								}
							}
						});
					}
				});
			});
		
		
		
		</script>
	</body>

</html>