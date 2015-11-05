package com.syd.controller;

import java.util.Date;
import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.syd.entity.MovieYear;
import com.syd.entity.User;
import com.syd.shiro.ShiroUtils;

/**
 * @author FHC
 * @文件名: MovieYearController.java
 * @类路径: com.syd.controller
 * @描述: 电影年代配置
 * @时间: 2015年11月2日13:21:01
 */
public class MovieYearController extends Controller {
	
	private User userInfo = ShiroUtils.getUser();
	
	/**
	 * 获取电影语种列表
	 */
	public void list(){
		setAttr("user", userInfo);
		
		String search_movieYear_name = getPara("search_movieYear_name");
		setAttr("search_movieYear_name", search_movieYear_name);

		List<Record> list = MovieYear.dao.getByNameLike(search_movieYear_name);
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
			MovieYear record = MovieYear.dao.findById(id);
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
		
		MovieYear model = new MovieYear();
		
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
		
		redirect("/movieYear/list");
	}
	
	
	/**
	 * 删除
	 */
	@Before(Tx.class)
	public void delete(){
		boolean result = false;
		try {
			Integer id = getParaToInt("id");
			
			result = MovieYear.dao.deleteById(id);
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		} finally {
			renderJson(result);
		}
		
		
		
	}
}





