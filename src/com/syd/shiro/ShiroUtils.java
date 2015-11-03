package com.syd.shiro;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import com.syd.entity.User;


/**
 * @author FHC
 * @文件名: ShiroUtils.java
 * @类路径: com.syd.shiro
 * @描述: shiro工具类
 * @时间: 2015年10月29日下午11:34:14
 */
public class ShiroUtils {
	

	public static User getUser() {
		ShiroPrincipal principal = getPrincipal();
		if (principal != null)
			return principal.getUser();
		return null;
	}
	

	/**
	 * 获取当前登录的认证实体
	 * 
	 * @return
	 */
	public static ShiroPrincipal getPrincipal() {
		Subject subject = SecurityUtils.getSubject();
		return (ShiroPrincipal) subject.getPrincipal();
	}


	
}
