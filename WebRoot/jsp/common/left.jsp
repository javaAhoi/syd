<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>


<div class="nav">
	<div class="zx_left">
		<div class="zx_left_nav left_nav_bg">
			<div class="zx_left_nav_box_title <c:if test="${fn:contains(request_action_key, '/flow')}">current</c:if>"><span>电影</span></div>
			<div class="zx_left_nav_box_list">
				<ul> 
					<li class="<c:if test="${fn:contains(request_action_key, '/movie/')}">active</c:if>">
						<a href="${ctx}/movie/list">电影列表</a>
					</li>

					<li class="<c:if test="${fn:contains(request_action_key, '/movieType/')}">active</c:if>">
						<a href="${ctx}/movieType/list">类型配置</a>
					</li>

					<li class="<c:if test="${fn:contains(request_action_key, '/movieAct/')}">active</c:if>">
						<a href="${ctx}/movieAct/list">演员配置</a>
					</li>

					<li class="<c:if test="${fn:contains(request_action_key, '/movieArea/')}">active</c:if>">
						<a href="${ctx}/movieArea/list">地区配置</a>
					</li>
					
					 
				</ul>
			</div>
			 
		
		</div> 
	</div> 
</div>

<script type="text/javascript">
$(function(){  
	
	//展开当前菜单所在的分组 
	$('.zx_left_nav_box_list').hide();
	$('.zx_left_nav_box_title.current').removeClass('current');
	$('li.active').parents('.zx_left_nav_box_list').show().prev('.zx_left_nav_box_title').addClass('current');
	 
});
</script>
