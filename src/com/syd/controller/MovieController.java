package com.syd.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.syd.entity.Movie;
import com.syd.entity.MovieActor;
import com.syd.entity.MovieActor2;
import com.syd.entity.MovieArea;
import com.syd.entity.MovieArea2;
import com.syd.entity.MovieLan;
import com.syd.entity.MovieType;
import com.syd.entity.MovieType2;
import com.syd.entity.MovieYear;
import com.syd.entity.User;
import com.syd.service.MovieService;
import com.syd.shiro.ShiroUtils;
import com.syd.utils.WebUtils;

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
				record.set("create_time", new Date());
				record.save();
				id = record.getInt("id");
			}
			
			// 获取参数
			Map<String, Object> params = getParamMapFromRequst();
			
			Object name = params.get("name");		// 名字
			Object minute = params.get("minute");	// 分钟
			Object sytime = params.get("sytime");	// 上映时间
			record.set("name", WebUtils.iso2utf(name.toString()));
			record.set("minute", minute);
			record.set("sy_time", sytime);
			
			// 遍历类型id， 保存到syd_movie_type_2_m表
			Object typeids = params.get("typeids");
			if(typeids != null){
				String[] ids = typeids.toString().split(",");
				for(String s : ids){
					MovieType2 mt2 = new MovieType2();
					mt2.set("movie_id", id);
					mt2.set("type_id", Integer.parseInt(s));
					mt2.save();
				}
			}

			// 获取年代id， 保存到syd_movie_year表
			Object yearid = params.get("yearid");
			record.set("year_id", yearid);
			
			// 遍历地区id， 保存到syd_movie_area_2_m表
			Object areaids = params.get("areaids");
			if(areaids != null){
				String[] ids = areaids.toString().split(",");
				for(String s : ids){
					MovieArea2 mt2 = new MovieArea2();
					mt2.set("movie_id", id);
					mt2.set("area_id", Integer.parseInt(s));
					mt2.save();
				}
			}
			
			// 获取语种，保存到syd_movie_language
			Object languageid = params.get("languageid");
			record.set("language_id", languageid);
			
			// 获取演员， 查询该演员是否存在；
			// 若不存在，则先保存到syd_movie_actor表，在保存到syd_movie_actor_2_m表
			// 若存在，则保存到syd_movie_actor_2_m表
			Object actors = params.get("actors");
			if(actors != null){
				String[] actor = actors.toString().split(",");
				for(String s : actor){
					s = WebUtils.iso2utf(s.toString());
					Record temp = MovieActor.dao.getByNameEQ(s);
					
					Integer tempid = null;
					
					// 不存在
					if(temp == null){
						MovieActor ma = new MovieActor();
						ma.set("name", s);
						ma.set("create_time", new Date());
						ma.save();
						
						tempid = ma.getInt("id");
					}
					
					// 存在
					else{
						tempid = temp.getInt("id");
					}
					
					MovieActor2 ma2 = new MovieActor2();
					ma2.set("movie_id", id);
					ma2.set("actor_id", tempid);
					ma2.save();
				}
			}
			
			// 获取简介
			Object info = params.get("info");
			record.set("info", WebUtils.iso2utf(info.toString()));
			
			record.set("update_time", new Date());
			record.update();
			flag = true;
		} catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		
		renderJson(flag);
	}
	
}





