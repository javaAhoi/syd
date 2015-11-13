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
	
}





