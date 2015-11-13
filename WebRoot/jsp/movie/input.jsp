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
								
									<!-- 基本信息 -->
									<div class="form_box box_bg marginT20">
										<div class="tile-header">填写基本信息</div>
										<div class="tile-body">
											<div class="field_box input_width">
												<div class="row">
													
													<div class="col-lg-4 col-md-4 marginB10">
														<label>电影名：</label>
														<input style="width:200px;" class="form-control movie-name required" type="text" value="${record.name}" >
													</div>
													
													<div class="col-lg-3 col-md-3 marginB10">
														<label>分钟：</label>
														<input style="width:70px;text-align:right;" class="form-control movie-minute required" type="text" value="${record.minute}" >分钟
													</div>
													
													<div class="col-lg-4 col-md-4 marginB10">
														<label>上映时间：</label>
														<input class="form-control movie-sytime icon_time_bg" onclick="WdatePicker()" type="text" />
													</div>
												
												</div>  
										  	</div>
										</div>
									</div>
									
									<!-- 类型 -->
									<div class="form_box box_bg">
										<div class="tile-header">类型</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line type-div">
														<ul>
															<c:forEach items="${types}" var="record">
																<li>
																	<input class="form-control" type="checkbox" name="" value="${record.id}"/>
																	<label class="paddingLR10">${record.name }</label>
																</li>
															</c:forEach>
														</ul>
													</div>
											   </div>
										  </div>
										</div>
									</div>
	
									<!-- 年代 -->
									<div class="form_box box_bg">
									<div class="tile-header">年代</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line year-div">
														<ul>
															<c:forEach items="${years}" var="record">
																<li>
																	<input class="form-control" type="radio" name="year" value="${record.id}"/>
																	<label class="paddingLR10">${record.name }</label>
																</li>
															</c:forEach>
														</ul>
													</div>
											   </div>
										  </div>
										</div>
									</div>
	
									<!-- 地区 -->
									<div class="form_box box_bg">
										<div class="tile-header">地区</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line area-div">
														<ul>
															<c:forEach items="${areas}" var="record">
																<li>
																	<input class="form-control" type="checkbox" name="" value="${record.id}"/>
																	<label class="paddingLR10">${record.name }</label>
																</li>
															</c:forEach>
														</ul>
													</div>
											   </div>
										  </div>
										</div>
									</div>
	
									<!-- 语种 -->
									<div class="form_box box_bg">
										<div class="tile-header">语种</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line lan-div">
														<ul>
															<c:forEach items="${lans}" var="record">
																<li>
																	<input class="form-control" type="radio" name="language" value="${record.id}"/>
																	<label class="paddingLR10">${record.name }</label>
																</li>
															</c:forEach>
														</ul>
													</div>
											   </div>
										  </div>
										</div>
									</div>
	
									<!-- 演员 -->
									<div class="form_box box_bg">
										<div class="tile-header">演员</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line actor-div">
														<div>
															<input style="width:200px;" class="form-control actor-input" type="text" >
															<label class="btn btn-success add-actor"><b>+</b></label> 
														</div> 
														<ul class="actor-li-list">  
															<li class="gray-li border-radius-5">
								 								<label class="paddingLR10 actor-name">成龙</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li> 
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
															<li class="gray-li border-radius-5">
																<label class="paddingLR10 actor-name">周星驰</label>
																<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>
															</li>
														</ul>
													</div>
											   </div>
										  </div>
										</div>
									</div>
										
									<!-- 简介 -->
									<div class="form_box box_bg">
										<div class="tile-header">简介</div>
										<div class="tile-body">
											<div class="field_box">
												<div class="row">
													<div class="col-lg-12 col-md-12 list_item_line ">
														<script id="editor" type="text/plain" style="width:100%;height:500px;"></script>
													</div>
											   </div>
										  </div>
										</div>
									</div>
										
									<div class="col-lg-12 col-md-12 text-left marginB26">
										<a onclick="submitForm(this);" class="submit btn-success" href="javascript:;">提交</a>
									</div>
								 
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
			
			//百度UEditor编辑器
			var ue = UE.getEditor('editor');
		
			//表单提提交
			function submitForm(obj){ 
				if($('input[name=name]').val() == ''){
					util.error('请输入演员名！');
					return false;
				}
				
				$(obj).parents('form').submit(); 
			}	
			
			
			$(function(){

				// 添加一个演员
				$('.add-actor').click(function(){
					var actor = $('.actor-input').val();
					if(actor == ''){
						util.error('请输入演员！');
						return false;
					}
					
					var LI = '';
					LI += '<li class="gray-li border-radius-5">';
					LI += '<label class="paddingLR10 actor-name">'+actor+'</label>';
					LI += '<label onclick="DeleteLI($(this));" class="paddingLR10 pull-right pointer">删除</label>';
					LI += '</li>';
					
					$('.actor-li-list').append(LI);
				});
			});
			
			
			// 表单提交
			function submitForm(obj){
				
				var param = new Object();
				
				// 基本信息
				param.name = $('.movie-name').val();
				param.minute = $('.movie-minute').val();
				param.sytime = $('.movie-sytime').val();
				
				// 类型
				var typeid = '';
				$('.type-div ul li input[type=checkbox]:checked').each(function(){
					typeid += $(this).val() + ",";
				});
				param.typeids = typeid;
				
				// 年代
				var yearid = $('.year-div ul li input[type=radio]:checked').val();
				param.yearid = yearid;
				
				// 地区
				var areaid = '';
				$('.area-div ul li input[type=checkbox]:checked').each(function(){
					areaid += $(this).val() + ",";
				});
				param.areaids = areaid;
				
				// 语种
				var lanid = $('.lan-div ul li input[type=radio]:checked').val();
				param.languageid = lanid;
				
				// 演员
				var actors = '';
				$('.actor-li-list li label.actor-name').each(function(){
					actors += $(this).text() + ",";
				});
				param.actors = actors;
				
				// 简介
				var info = ue.getContent();
				param.info = info;
				
				
				
				
				var $form = $(obj).parents('form');
				
				$.ajax({
					type : 'get',
					url  : $form.attr('action'),
					data : param,
					success : function(result){
						if(result){
							window.location.href = '${ctx}/movie/list';
						}else{
							util.error('系统错误！');
							return false;
						} 
					}
				});
				
				
			}
			
		</script>
	</body>

</html>