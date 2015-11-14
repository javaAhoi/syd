package com.syd.utils;

/**
 * @作者 FHC
 * @类路径 com.syd.entity.Constant
 * @创建时间 2015年11月13日下午10:42:33
 * @功能说明   常量
 */
public class Constant {

	// 查询条件
	public static enum QueryType{
		
		like,	 
		
		eq, ;
	}
	
	
	// 新增：create   修改：update
	public static enum OperaStr{
		
		create("create"),
		
		update("uopdate"),
		
		;
		
		OperaStr(String text){
			this.text = text;
		}
		
		private String text;

		public String getText() {
			return text;
		}

		public void setText(String text) {
			this.text = text;
		}
	}
	
	
	// 上传图片压缩大小：2M
	public static final long maxPicSize = 2*1024*1000L;
	
	// 压缩图片尺寸：150*200
	public static final int imgWidth = 150;
	public static final int imgHeight = 200;
	
	// 压缩时是否保持原有尺寸
	public static final boolean Btrue = true;
	public static final boolean Bfalse = false;
	
	
}
