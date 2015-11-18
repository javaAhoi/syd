package com.syd.exception;



/**
 * @author FHC
 * @文件名: MsgException.java
 * @类路径: com.syd.exception
 * @描述: 异常类
 * @时间: 2015年11月18日下午7:26:41
 */
public class MsgException extends Exception {
    private static final long serialVersionUID = 1L;

    private boolean flag;

    public MsgException(String msg) {
        super(msg);
    }

    public MsgException(Integer code, String msg) {
        super(msg);
        setFlag(flag);
    }

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}



}