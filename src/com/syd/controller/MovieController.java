package com.syd.controller;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.jfinal.render.JsonRender;
import com.jfinal.upload.UploadFile;
import com.syd.entity.Attach;
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
import com.syd.utils.Constant;
import com.syd.utils.FileUtil;

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
		List<Record> lans = MovieLan.dao.getList();
		setAttr("types", types);
		setAttr("areas", areas);
		setAttr("years", years);
		setAttr("lans", lans);
		
		
		// 更新时，查询对象的初始值
//		String opera = getPara("opera");
		Integer movie_id = getParaToInt("id");
		if(movie_id != null){
			
			// 电影对象
			Record MovieRecord = Movie.dao.getInfoById(movie_id);
			setAttr("MovieRecord", MovieRecord);
			
			// 类型list
			List<Record> typeList = MovieType.dao.getByMovieId(movie_id, null);
			String typeStr = MovieService.service.getIdsByList(typeList, "type_id");
			setAttr("typeStr", typeStr);
			
			// 地区list
			List<Record> areaList = MovieArea.dao.getByMovieId(movie_id, null);
			String areaStr = MovieService.service.getIdsByList(areaList, "area_id");
			setAttr("areaStr", areaStr);
			
			// 演员list
			List<Record> actorList = MovieActor.dao.getByMovieId(movie_id, null);
			setAttr("actorList", actorList);
			
			// 图片附件list
			List<Record> attachList = Attach.dao.getByMovieId(movie_id);
			setAttr("attachList", attachList);
		}
		
		
		
	}
	
	
	
	
	
	/**
	 * 删除
	 */
	@Before(Tx.class)
	public void delete(){
		boolean result = false;
		try {
			Integer id = getParaToInt("id");
			
			result = Movie.dao.deleteById(id);
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		} finally {
			renderJson(result);
		}
	}
	
	
	/**
	 * 保存
	 */
	@Before(Tx.class)
	public void save(){
		
		try {
			Integer id = getParaToInt("id");
			
			Movie record = new Movie();
			
			// 更新
			if(id != null){
				
				// 删除电影相关联的表
				MovieService.service.deleteRefTables(id);
				
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
			if(name != null && !name.equals(""))
				record.set("name", name.toString());
			if(minute != null && !minute.equals(""))
				record.set("minute", minute);
			if(sytime != null && !sytime.equals(""))
				record.set("sy_time", sytime);
			
			// 遍历类型id， 保存到syd_movie_type_2_m表
			Object typeids = params.get("typeids");
			if(typeids != null && !typeids.equals("")){
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
			if(yearid != null && !yearid.equals(""))
				record.set("year_id", yearid);
			
			// 遍历地区id， 保存到syd_movie_area_2_m表
			Object areaids = params.get("areaids");
			if(areaids != null && !areaids.equals("")){
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
			if(languageid != null && !languageid.equals(""))
				record.set("language_id", languageid);
			
			// 获取演员， 查询该演员是否存在；
			// 若不存在，则先保存到syd_movie_actor表，在保存到syd_movie_actor_2_m表
			// 若存在，则保存到syd_movie_actor_2_m表
			Object actors = params.get("actors");
			if(actors != null && !actors.equals("")){
				String[] actor = actors.toString().split(",");
				for(String s : actor){
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
			if(info != null && !info.equals(""))
				record.set("info", info.toString());
			
			// 获取图片附件，只在新增时更新附件字段
			if(id == null){
				Object pks = params.get("fileids");
				if(pks != null && !pks.equals(""))
					Attach.dao.updateMovieIdByPks(id, pks.toString());
			}
			
			
			record.set("update_time", new Date());
			record.update();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		redirect("/movie/list");
	}
	
	
	
	/**
	 * 表单保存前先保存到附件表，再返回主键id
	 */
	@Before(Tx.class)
	public void saveAttach(){
		
		// 保存文件到服务器
		UploadFile uploadFile = getFile();
		
		// 重命名
		File file = FileUtil.renameToUniqueFileName(uploadFile);
		
		// 压缩图片，并返回图片地址
		String url = FileUtil.compressPic(Constant.maxPicSize, file);
		
		// 获取自定义参数，如果有movie_id则保存movie_id
		String qqfilename = getPara("qqfilename");
		Integer movie_id = getParaToInt("movie_id");
		
		// 保存到附件表
		Attach model = Attach.dao.saveUploadFile(movie_id, qqfilename, url);
		
		// 返回id
		setAttr("id", model.get("id"));
		setAttr("success", true);
		
		renderJson();
		((JsonRender) getRender()).forIE();	//IE兼容
	}
	
	
}





