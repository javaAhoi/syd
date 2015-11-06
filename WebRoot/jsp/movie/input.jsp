<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh-CN">

	<head>
		<%@ include file="/jsp/common/meta.jsp"%>

		<%@ include file="/jsp/common/cssJs.jsp"%>
		
		<title>搜影殿-电影详情</title>
		
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
							<a href="${ctx}/index">电影</a><a href="${ctx}/movie/list">电影列表</a><a href="javascript:;" class="active"><c:if test="${opera eq 'create'}">新增</c:if><c:if test="${opera ne 'create'}">修改</c:if>电影</a>
						</div>
						<!--/middle_top_nav-->
						<!--/middle_main-->
						<div class="middle_main from_style">
						 <!-- list_table -->
						 <form autocomplete="off" action="${ctx}/movie/save" method="post" class="form-horizontal">
						 	<input type="hidden" name="opera" value="${opera}">
						 	<input type="hidden" name="id" value="${id}">
							<div class="col-lg-12 col-md-12">
								<div class="form_box box_bg marginT20">
									<div class="tile-header">填写基本信息</div>
									<div class="tile-body">
										<div class="field_box input_width">
											<div class="row">
												<div class="col-lg-4 col-md-4 marginB10">
													<label>电影名：</label>
													<input style="width:200px;" name="name" class="form-control required" type="text" value="${record.name}" >
												</div>
												<div class="col-lg-4 col-md-4 marginB10">
													<label>分钟：</label>
													<input style="width:70px;text-align:right;" name="minute" class="form-control required" type="text" value="${record.minute}" >分钟
												</div>
												<div class="col-lg-4 col-md-4 marginB10">
													<label>上映时间：</label>
													<input style="width:70px;text-align:right;" name="sy_time" class="form-control required" type="text" value="${record.minute}" >
												</div>
												<div class="col-lg-12 col-md-12 list_item_line type-div">
													<label>类型：</label>
													<ul>
														<c:forEach items="${types}" var="record">
															<li>
																<input class="form-control" type="checkbox" name="" value="${record.id}"/>
																<label class="paddingLR10">${record.name }</label>
															</li>
														</c:forEach>
													</ul>
												</div>
												<div class="col-lg-12 col-md-12 list_item_line type-div">
													<label>年代：</label>
													<ul>
														<c:forEach items="${years}" var="record">
															<li>
																<input class="form-control" type="checkbox" name="" value="${record.id}"/>
																<label class="paddingLR10">${record.name }</label>
															</li>
														</c:forEach>
													</ul>
												</div>
												<div class="col-lg-12 col-md-12 list_item_line type-div">
													<label>地区：</label>
													<ul>
														<c:forEach items="${areas}" var="record">
															<li>
																<input class="form-control" type="checkbox" name="" value="${record.id}"/>
																<label class="paddingLR10">${record.name }</label>
															</li>
														</c:forEach>
													</ul>
												</div>
												<div class="col-lg-12 col-md-12 list_item_line type-div">
													<label>演员：</label>
													<select class="form-control actor-select">
														<option data-alternative-spellings="1" value="">1</option>
														<option data-alternative-spellings="2" value="">2</option>
														<option data-alternative-spellings="3" value="">3</option>
														<option data-alternative-spellings="4" value="">4</option>
													</select>
													<label>添加</label>
													<ul>
														<li class="gray-li">
															<label class="paddingLR10">成龙</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li> 
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
													 	</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
														<li class="gray-li">
															<label class="paddingLR10">周星驰</label>
															<label class="paddingLR10 pull-right click-del-li">删除</label>
														</li>
													</ul>
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
					util.error('请输入演员名！');
					return false;
				}
				
				$(obj).parents('form').submit(); 
			}	
			
			
			$(function(){
				
				//注册下拉框为autocomplete
				$('.actor-select').selectToAutocomplete();
				
// 				删除一行LI
				$('.click-del-li').click(function(){
					$(this).parents('li').remove();
					util.success('删除成功!'); 
				});
				
				
			});
		</script>
	</body>

</html>