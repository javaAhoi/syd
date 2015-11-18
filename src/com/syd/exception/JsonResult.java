package com.syd.exception;

/**
 * 返回Json数据的基本格式
 *
 */
public class JsonResult {
	/**
	 * 正常返回（status=200）时的业务逻辑数据
	 */
	private Object data;
	
	private boolean flag;
	
	/**
	 * 对返回结果的一个说明
	 */
	private String msg = "ok";
	
	/**
	 * 正常返回的构造函数
	 * @param data 业务逻辑数据
	 */
	public JsonResult(Object data){
		this.data = data;
	}
	
	/**
	 * 异常返回的构造函数
	 */
	public JsonResult(boolean flag,String msg){
		this.flag = flag;
		this.msg = msg;
		
	}
	
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	
	

}
