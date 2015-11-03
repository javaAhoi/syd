package com.syd.entity;

import com.jfinal.plugin.activerecord.Model;

/**
 * @author FHC
 * @文件名: User.java
 * @类路径: com.syd.dao
 * @描述: 用户表
 * @时间: 2015年10月29日下午11:14:21
 */
public class User extends Model<User> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final User dao = new User();
	
	public String getUsername(){
		return getStr("username");
	}
	
	public String getPassword(){
		return getStr("password");
	}
	
	
	/**
	 * 根据username获取用户
	 * @param username
	 * @return
	 */
	public User getByUsername(String username){
		return findFirst("select * from syd_user where username = ?", username);
	}
	
	
}
