package com.syd.controller;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import com.jfinal.core.Controller;

/**
 * @author FHC
 * @文件名: MovieController.java
 * @类路径: com.syd.controller
 * @描述: 电影库
 * @时间: 2015年10月29日下午10:12:22
 */
public class BaseController extends Controller {
	
	
	/**
	 * 处理表单参数
	 */
	public Map<String, Object> getParamMapFromRequst(){
		Map<String, Object> params = new HashMap<String, Object>();
		
		// 遍历参数，将所有参数放入map
		Enumeration<String> paraNames = getRequest().getParameterNames();
		while (paraNames.hasMoreElements()) {
			String element = paraNames.nextElement();
			params.put(element, getPara(element));
		}
		
		return params;
	}
	
	
	/**
	 * 获取文件保存路径
	 * @return
	 */
	public String getFileDir(){
		// 保存文件到服务器:"/E:/apache-tomcat-7.0.57/wtpwebapps/syd/WEB-INF/classes/"
		String absoluteurl = getClass().getClassLoader().getResource("").getPath();
		int index = absoluteurl.indexOf("syd/");
		
		// absoluteurl: /E:/apache-tomcat-7.0.57/wtpwebapps/syd
		absoluteurl = absoluteurl.substring(0, index+3);
		
		return absoluteurl;
	}
}





