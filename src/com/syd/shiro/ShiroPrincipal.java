package com.syd.shiro;

import java.io.Serializable;

import com.syd.entity.User;

/**
 * @author FHC
 * @文件名: ShiroPrincipal.java
 * @类路径: com.syd.shiro
 * @描述: 自定义认证主体
 * @时间: 2015年10月29日下午11:26:16
 */
public class ShiroPrincipal implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1428196040744555722L;
	// 用户对象
	private User user;

	// 是否已授权。如果已授权，则不需要再从数据库中获取权限信息，减少数据库访问
	// 这里会导致修改权限时，需要重新登录方可有效
	private boolean isAuthorized = false;

	/**
	 * 构造函数，参数为User对象 根据User对象属性，赋值给Principal相应的属性上
	 * 
	 * @param user
	 */
	public ShiroPrincipal(User user) {
		this.user = user;
	}


	public boolean isAuthorized() {
		return isAuthorized;
	}

	public void setAuthorized(boolean isAuthorized) {
		this.isAuthorized = isAuthorized;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getUsername() {
		return this.user.get("username");
	}

	public String getFullname() {
		return this.user.get("fullname");
	}

	public Integer getId() {
		return this.user.get("id");
	}

	/**
	 * <shiro:principal/>标签显示中文名称
	 */
	@Override
	public String toString() {
		return this.user.get("fullname");
	}
}
