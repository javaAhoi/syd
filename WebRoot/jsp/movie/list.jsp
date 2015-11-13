<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>

		<%@ include file="/jsp/common/cssJs.jsp"%>

		<title>电影-列表</title>
		
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
							<a href="${ctx}/index">电影</a><a href="javascript:;" class="active">电影列表</a>
						</div>
						<div class="middle_main paddingLR10 marginB26">
							<div class="col-lg-12 col-md-12">
						    	<div id="custom-toolbar1">
							    	<form action="${ctx}/movie/list" method="post">
							    		<input type="text" class="form-control" name="search_movie_name" value="${search_movie_name}" placeholder="输入电影名搜索" />
								    	<input type="submit" value="检索" style="width: auto;" class="btn btn-success marginT10" />
								    	<a href="${ctx}/movie/input?opera=create" style="width: auto;" class="btn btn-success marginT10 marginL20">新增电影</a>
							    	</form>
								</div> 
								<div class="tile-body marginTf20">
									<table data-toggle="table" data-toolbar="#custom-toolbar1" data-pagination="true" data-page-size="15">
										<thead>
											<tr>
										        <th data-align="center" data-width="100">序号</th>
										        <th data-align="center" data-width="12%">电影名</th>
										        <th data-align="center" data-width="12%">类型</th>
										        <th data-align="center" data-width="100">年代</th> 
										        <th data-align="center" data-width="12%">主演</th>
										        <th data-align="center" data-width="100">语种</th> 
										        <th data-align="center" data-width="100">分钟</th> 
										        <th data-align="center" data-width="12%">操作</th>
											</tr>
										</thead>
										<tbody class="tbody-div">
											
											<c:forEach items="${list}" var="record" varStatus="sta">
												<tr>
													<td>${sta.index+1 }</td>
													<td>
														<a title="点击修改" style="font-size: 14px;" href="${ctx}/movie/input?id=${record.id}">${record.name }</a>
											 		</td>
													<td>
														<c:forEach items="${record.types}" var="type">
															${type.name}&nbsp;&nbsp;
														</c:forEach>
													</td>
													<td>${record.year }</td>
													<td>
														<c:forEach items="${record.actors}" var="actor">
															${actor.name}&nbsp;&nbsp;
														</c:forEach>
													</td>
													<td>${record.lan }</td>
													<td>${record.minute }</td>
													<td>
														删除
														修改
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
			
		</script>
	</body>

</html>