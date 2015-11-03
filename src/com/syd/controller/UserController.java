package com.syd.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;

import com.jfinal.core.Controller;

/**
 * @author FHC
 * @文件名: UserController.java
 * @类路径: com.syd.controller
 * @描述: 用户
 * @时间: 2015年10月30日上午12:33:20
 */
public class UserController extends Controller {
	
	
	/**
	 * 处理登录
	 */
	public void dologin(){
		String error = "";
		String username = getPara("username");
		String password = getPara("password");
		
		Subject subject = SecurityUtils.getSubject();
		
		if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
			error = "登录名或密码不能为空";
		} else {
			//去掉前后空格
			username = username.replaceAll(" ",	"").trim();
			password = password.replaceAll(" ",	"").trim();
			
			UsernamePasswordToken token = new UsernamePasswordToken(username, password);
			
			try {
				subject.login(token);
			} catch (UnknownAccountException ue) {
				token.clear();
				error = "登录失败，您输入的账号不存在";
			} catch (IncorrectCredentialsException ie) {
				ie.printStackTrace();
				token.clear();
				error = "登录失败，密码不匹配";
			} catch (RuntimeException re) {
				re.printStackTrace();
				token.clear();
				error = "登录失败";
			}
		}
		
		renderText(error);
		
	}
	
}





