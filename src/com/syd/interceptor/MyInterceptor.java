package com.syd.interceptor;

import java.util.Date;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.aop.Interceptor;
import com.jfinal.core.ActionInvocation;
import com.jfinal.core.Controller;
import com.syd.utils.DateUtils2;

/**
 * @描述: 设置一些公共的属性
 * @时间: 2015年7月6日下午5:11:38
 */
public class MyInterceptor implements Interceptor {
	private void setAttr(ActionInvocation ai) {

		Controller controller = ai.getController();		//访问的action
		
		//将actionkey 存入request中
		String key = controller.getAttr("request_action_key");
		
		if(StringUtils.isEmpty(key)) key = ai.getActionKey();			// forward 会有action key存在，以第一次的action key为准
		
		controller.setAttr("request_action_key",key);
		
		//将当前时间存入到request中
		controller.setAttr("currentDay", DateUtils2.date2String(new Date()));
		
		//将昨天的日期存入到request中
		controller.setAttr("yestoday", DateUtils2.getYestoday());
		
		//将明天的日期存入到request中
		controller.setAttr("tomorrow", DateUtils2.getTomorrow());

		//用户性别
//		User user = ShiroUtils.getUser();
//		if(user != null){
//			controller.setAttr("userSex", user.get("sex"));
//		}

	}


	@Override
	public void intercept(ActionInvocation ai) {
	 
		setAttr(ai);
		
		ai.invoke();
	}
}
