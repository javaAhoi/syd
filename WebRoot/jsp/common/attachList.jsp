<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/jsp/common/taglibs.jsp"%>



<div class="form_box box_bg attach_list">
	<div class="tile-header marginB10">附件列表</div>
	<div class="tile-body">
		<div class="row"> 
			<div class="nopadding">
				
				<ul class="qq-upload-list-selector qq-upload-list list">
					<c:forEach items="${attachList}" var="attach">
						<li style="background-color: #F5F8FA;">
							<span class="qq-upload-file-selector qq-upload-file">
								<span><a class="annex" href="${ctx}${attach.url}" target="_blank">${attach.name}</a></span>
								<span style="float: right;"><fmt:formatDate value="${attach.create_time }" pattern="yyyy-MM-dd HH:mm:ss"/></span>
							</span> 
						</li>
					</c:forEach>
				</ul>
				
				<div id="manual-fine-uploader"></div>
				<script type="text/template" id="qq-template-manual-noedit">
					<div class="qq-uploader-selector qq-uploader">
						<ul class="qq-upload-list-selector qq-upload-list">
							<li style="background-color: #F5F8FA;">
								<div class="qq-progress-bar-container-selector">
									<div class="qq-progress-bar-selector qq-progress-bar"></div>
								</div>
								<span class="qq-upload-spinner-selector qq-upload-spinner"></span>
								<span class="qq-upload-file-selector qq-upload-file" style="color:rgb(57, 158, 229);"></span>
								<span class="qq-edit-filename-icon-selector qq-edit-filename-icon" aria-label="Edit filename"></span>
								<input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text" style="width:40%;"> 
								<span class="qq-upload-size-selector qq-upload-size"></span>
								<span class="qq-upload-status-text-selector qq-upload-status-text"></span>
								<span style="float:right;"><a class="qq-upload-cancel-selector qq-upload-cancel" href="#" style="font-size:16px;color:rgb(57, 158, 229);">删除</a></span>
							</li>
						</ul>
						<div class="qq-upload-button-selector qq-upload-button" style="float: right;border-radius: 6px; background:none; border-bottom:0px; ">
							<div style="color:#399EE5;">添加附件</div>
						</div>
					</div> 
				</script>
				<script type="text/javascript">
					
					function uploadFile(callback_submit){
						var total = $("#manual-fine-uploader").find("[qq-file-id]").length;
						var success = $("#manual-fine-uploader").find(".qq-upload-success").length;
						if (total > success) { //有未上传的文件
							manualuploader.on('allComplete', function(event, id, name, response) {
								callback_submit();
							});
							manualuploader.fineUploader('uploadStoredFiles'); 
						} else {
							callback_submit();
						}
					};
					
					function initUploader() {
						var opt = {
							request: {
								endpoint: '${ctx}/movie/saveAttach?movie_id=${movie_id}' //文件上传的地址
							},
							callbacks: {
								onComplete: function(id, name, data) {
									var li = $("#manual-fine-uploader").find("[qq-file-id=" + id + "]");
									li.append("<input type='hidden' name='fileid' value='" + data.id + "' />");
								}
							},
							validation: {
								//控制上传文件的后缀格式数组
								//allowedExtensions: ['jpeg', 'jpg', 'png', 'xls', 'xlsx', 'pdf', 'txt', 'doc', 'docx', 'rar', 'zip'],
							    //控制上传文件大小
							    sizeLimit: 10 * (1024 * 1024) //10M
							},  
							template: "qq-template-manual-noedit", 
							autoUpload: false,
							chunking: {
								enabled: false 
							}
						};
						manualuploader = $('#manual-fine-uploader').fineUploader(opt);
					}
				</script>
				
				
			</div>  
		</div>
	</div>
</div>


