package com.syd.controller;

import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.syd.entity.Movie;
import com.syd.entity.MovieActor;
import com.syd.entity.MovieArea;
import com.syd.entity.MovieLan;
import com.syd.entity.MovieType;
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
public class MovieController extends Controller {
	
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
	
}





