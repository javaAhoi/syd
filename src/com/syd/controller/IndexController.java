package com.syd.controller;

import com.jfinal.core.Controller;
import com.syd.entity.User;
import com.syd.shiro.ShiroUtils;

public class IndexController extends Controller {
	
	public void index() {
		// 获取当前登录人员
		User userInfo = ShiroUtils.getUser();
		setAttr("user", userInfo);
		
		if(userInfo == null){
			redirect("/login");
			return;
		}
		
		else{
			render("index.jsp");
		}
	}
	
	
	/**
	 * 登录
	 */
	public void login(){
		render("login.jsp");
	}
	
	/**
	 * 退出系统
	 */
	public void exit(){
		getRequest().getSession().invalidate();
		render("login.jsp");
		
	}
}





