package com.syd.controller;

import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.cnksi.gendoc.annotations.DocAction;
import com.cnksi.gendoc.annotations.DocPara;
import com.cnksi.gendoc.annotations.DocParas;
import com.cnksi.gendoc.annotations.DocResponse;
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
import com.syd.exception.JsonResult;
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
	@DocAction(comment = "红外测温报告列表接口")
	@DocParas({
			@DocPara(comment = "变电站名称（模糊查询）", exampleValue = "220", name = "search_LIKE__bdz_name"),
			@DocPara(comment = "创建时间（开始）", exampleValue = "2016-01-01", name = "search_GTE__insert_time"),
			@DocPara(comment = "创建时间（结束）", exampleValue = "2016-12-31", name = "search_LTE__insert_time"),
			@DocPara(comment = "当前页", exampleValue = "1", name = "pageNum")})
	@DocResponse(selectSql = "select * from syd_movie")			//返回值的说明。直接读取数据库中字段的注解，可以用指定的字段名称代替*，支持多表联合查询，支持字段别名
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

			// 若该对象已经有封面图片，则不再设置封面
			List<Record> temp = Attach.dao.getByMovieIdIndex(movie_id);
			if(temp != null && temp.size() > 0){
				setAttr("setIndex", false);
			}else{
				setAttr("setIndex", true);
			}
			
			
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
			
			// 1.遍历类型id， 保存到syd_movie_type_2_m表
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

			// 2.获取年代id， 保存到syd_movie_year表
			Object yearid = params.get("yearid");
			if(yearid != null && !yearid.equals(""))
				record.set("year_id", yearid);
			
			// 3.遍历地区id， 保存到syd_movie_area_2_m表
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
			
			// 4.获取语种，保存到syd_movie_language
			Object languageid = params.get("languageid");
			if(languageid != null && !languageid.equals(""))
				record.set("language_id", languageid);
			
			// 5.获取演员， 查询该演员是否存在；
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
			
			// 6.获取简介
			Object info = params.get("info");
			if(info != null && !info.equals(""))
				record.set("info", info.toString());
			
			// 7.获取图片附件
//			if(id == null){
				Object pks = params.get("fileids");
				if(pks != null && !pks.equals(""))
					Attach.dao.updateMovieIdByPks(id, pks.toString());
//			}
			
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
		
		UploadFile uploadFile = getFile();
		
		// 重命名
		File file = FileUtil.renameToUniqueFileName(uploadFile);
		
		// 压缩图片，并返回图片地址	（内容截图尺寸：900*500）
		String url = FileUtil.compressPic(Constant.maxPicSize, file, Constant.imgWidthDetail, Constant.imgHeightDetail);
		
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
	
	
	/**
	 * 设置图片为封面图片
	 */
	@Before(Tx.class)
	public void setIndexImg(){
		
		JsonResult jr = new JsonResult(null);
		
		boolean flag = false;
		
		try {

			// 获取图片对象
			Integer attach_id = getParaToInt("attach_id");
			Attach attach = Attach.dao.findById(attach_id);
			
			// 获取文件保存路径
			String absoluteurl = getFileDir();
			
			// 获取该文件对象
			File new_file = new File(absoluteurl + attach.getStr("url"));
			
			// 压缩封面图片，并返回图片地址	（封面图片尺寸：150*200）
			String new_url = FileUtil.compressPic(Constant.maxPicSize, new_file, Constant.imgWidthIndex, Constant.imgHeightIndex);
			
			// 更新
			attach.set("url", new_url);
			attach.set("is_index", 1);
			
			flag = attach.update();
			
		} catch (Exception e) {
			flag = false;
			jr.setMsg(e.getMessage());
			
			e.printStackTrace();
		} finally {
			jr.setFlag(flag);
		}
		
		renderJson(jr);
	}
	
	
	/**
	 * 删除图片
	 */
	@Before(Tx.class)
	public void deleteImg(){

		JsonResult jr = new JsonResult(null);
		
		boolean flag = false;
		
		try {
			Integer attach_id = getParaToInt("attach_id");
			Attach attach = Attach.dao.findById(attach_id);
			
			// 获取文件保存路径
			String absoluteurl = getFileDir();
			
			// 获取该文件对象
			File new_file = new File(absoluteurl + attach.getStr("url"));
			
			// 删除文件
			FileUtil.deleteFile(new_file);
			
			// 删除
			flag = Attach.dao.deleteById(attach_id);
			
		} catch (Exception e) {
			flag = false;
			jr.setMsg(e.getMessage());
			
			e.printStackTrace();
		} finally {
			jr.setFlag(flag);
		}
		
		renderJson(jr);
	}
	
	/**
	 * 增加点击次数 
	 */
	@Before(Tx.class)
	public void click(){

		boolean result = false;
		
		try {
			Integer movie_id = getParaToInt("movie_id");
			
			// 更新， 将‘点击’字段自增1
			Movie record = Movie.dao.findById(movie_id);
			if(record != null){
				Integer click_count = record.getInt("click_count");
				click_count ++ ;
				record.set("click_count", click_count);

				result = record.update();
			}
			
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		}
		
		renderJson(result);
	}
	
	
	/**
	 * 点击赞/喜欢 
	 */
	@Before(Tx.class)
	public void clickLike(){

		boolean result = false;
		
		try {
			Integer movie_id = getParaToInt("movie_id");
			
			// 更新， 将‘喜欢’字段自增1
			Movie record = Movie.dao.findById(movie_id);
			if(record != null){
				Integer likecount = record.getInt("like_count");
				likecount ++ ;
				record.set("like_count", likecount);

				result = record.update();
			}
			
		} catch (Exception e) {
			result = false;
			e.printStackTrace();
		}
		
		renderJson(result);
	}
	
}





