package com.syd.controller;

import java.util.Date;
import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.syd.entity.MovieArea;
import com.syd.entity.User;
import com.syd.shiro.ShiroUtils;

/**
 * @author FHC
 * @文件名: MovieAreaController.java
 * @类路径: com.syd.controller
 * @描述: 电影地区配置
 * @时间: 2015年11月3日13:19:48
 */
public class MovieAreaController extends Controller {
	
	private User userInfo = ShiroUtils.getUser();
	
	/**
	 * 获取电影类型列表
	 */
	public void list(){
		setAttr("user", userInfo);
		
		String search_movieArea_name = getPara("search_movieArea_name");
		setAttr("search_movieArea_name", search_movieArea_name);

		List<Record> list = MovieArea.dao.getByNameLike(search_movieArea_name);
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
			MovieArea record = MovieArea.dao.findById(id);
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
		
		MovieArea model = new MovieArea();
		
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
		
		redirect("/movieArea/list");
	}
	
	
	/**
	 * 删除
	 */
	@Before(Tx.class)
	public void delete(){
		boolean result = false;
		try {
			Integer id = getParaToInt("id");
			
			result = MovieArea.dao.deleteById(id);
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		} finally {
			renderJson(result);
		}
		
		
		
	}
}





