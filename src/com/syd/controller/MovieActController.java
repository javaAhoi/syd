package com.syd.controller;

import java.util.Date;
import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.syd.entity.MovieActor;
import com.syd.entity.User;
import com.syd.shiro.ShiroUtils;
import com.syd.utils.Constant.QueryType;

/**
 * @author FHC
 * @文件名: MovieActController.java
 * @类路径: com.syd.controller
 * @描述: 电影演员配置
 * @时间: 2015年11月2日17:11:00
 */
public class MovieActController extends Controller {
	
	private User userInfo = ShiroUtils.getUser();
	
	/**
	 * 获取电影演员列表
	 */
	public void list(){
		setAttr("user", userInfo);
		
		String search_movieAct_name = getPara("search_movieAct_name");
		setAttr("search_movieAct_name", search_movieAct_name);
		
		List<Record> list = MovieActor.dao.getByName(search_movieAct_name, QueryType.like);
		setAttr("list", list);
		
	}
	
	
	/**
	 * 跳转到新增页面
	 */
	public void input(){
		setAttr("user", userInfo);
		
		keepPara();
		Integer id = getParaToInt("id");
		if(id != null){
			MovieActor record = MovieActor.dao.findById(id);
			setAttr("record", record);
		}
	}
	
	
	/**
	 * 修改 or 新增
	 */
	@Before(Tx.class)
	public void save(){
		String opera = getPara("opera");
		
		String name = getPara("name");
		Integer id = getParaToInt("id");
		
		MovieActor model = new MovieActor();
		
		//新增
		if("create".equals(opera)){
			model.set("name", name);
			model.set("create_time", new Date());
			model.save();
		}
		
		//修改
		else{
			model.set("id", id);
			model.set("name", name);
			model.update();
		}
		
		redirect("/movieAct/list");
	}
	
	
	/**
	 * 删除
	 */
	@Before(Tx.class)
	public void delete(){
		boolean result = false;
		try {
			Integer id = getParaToInt("id");
			
			result = MovieActor.dao.deleteById(id);
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		} finally {
			renderJson(result);
		}
		  
		
		
	}
}





