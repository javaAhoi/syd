package com.syd.controller;

import java.util.List;
import java.util.Map;

import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.syd.entity.Movie;
import com.syd.entity.MovieActor;
import com.syd.entity.MovieArea;
import com.syd.entity.MovieLan;
import com.syd.entity.MovieType;
import com.syd.entity.MovieType2;
import com.syd.entity.MovieYear;
import com.syd.entity.User;
import com.syd.service.MovieService;
import com.syd.shiro.ShiroUtils;

/**
 * @author FHC
 * @文件名: MovieController.java
 * @类路径: com.syd.controller
 * @描述: 电影库
 * @时间: 2015年10月29日下午10:12:22
 */
public class MovieController extends BaseController {
	
	private User userInfo = ShiroUtils.getUser();
	
	/**
	 * 获取电影列表
	 */
	public void list(){
		setAttr("user", userInfo);
		
		//获取电影的所有属性（演员，类型）
		List<Record> list = Movie.dao.getList();
		
		MovieService.service.getAllList(list);
		setAttr("list", list);
		
	}
	
	
	/**
	 * 跳转到新增电影
	 */
	public void input(){
		keepPara();

		setAttr("user", userInfo);
		
		//查询 list
		List<Record> types = MovieType.dao.getList();
		List<Record> areas = MovieArea.dao.getList();
		List<Record> years = MovieYear.dao.getList();
		List<Record> actors = MovieActor.dao.getList();
		List<Record> lans = MovieLan.dao.getList();
		setAttr("types", types);
		setAttr("areas", areas);
		setAttr("years", years);
		setAttr("actors", actors);
		setAttr("lans", lans);
	}
	
	
	/**
	 * 保存
	 */
	@Before(Tx.class)
	public void save(){
		
		boolean flag = false;
		
		try {
			String opera = getPara("opera");
			Integer id = getParaToInt("id");
			
			Movie record = new Movie();
			
			// 更新
			if("update".equals(opera)){
				record.set("id", id);
				record.update();
				
			}
			
			// 新增
			else{
				record.save();
				id = record.getInt("id");
			}
			
			
			
			// 获取参数
			Map<String, Object> params = getParamMapFromRequst();
			
			Object name = params.get("name");		// 名字
			Object minute = params.get("minute");	// 分钟
			Object sytime = params.get("sytime");	// 上映时间
			record.set("name", name);
			record.set("minute", minute);
			record.set("sy_time", sytime);
			
			// 遍历类型id， 保存到syd_movie_2_type表
			Object typeids = params.get("typeids");	// 类型id
			if(typeids != null){
				String[] ids = typeids.toString().split(",");
				for(String s : ids){
					MovieType2 mt2 = new MovieType2();
					mt2.set("movie_id", id);
					mt2.set("type_id", Integer.parseInt(s));
					mt2.save();
				}
			}
			
			
			
			
			
			record.update();
			flag = true;
		} catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		
		renderJson(flag);
	}
	
}





