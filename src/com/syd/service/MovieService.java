package com.syd.service;

import java.util.List;

import com.jfinal.plugin.activerecord.Record;
import com.syd.entity.MovieActor;
import com.syd.entity.MovieType;
import com.syd.utils.PinYin;

/**
 * @author FHC
 * @文件名: MovieService.java
 * @类路径: com.syd.service
 * @描述: 电影库
 * @时间: 2015年10月29日下午11:03:51
 */
public class MovieService {
	
	public static final MovieService service = new MovieService();
	
	
	/**
	 * 获取电影的所有属性（演员，类型）
	 * @param list
	 */
	public void getAllList(List<Record> list){
		for(Record r : list){
			Integer movie_id = r.getInt("id");
			
			//获取电影演员list
			List<Record> actors = MovieActor.dao.getByMovieId(movie_id, 2);
			r.set("actors", actors);
			
			//获取电影类型list
			List<Record> types = MovieType.dao.getByMovieId(movie_id, 2);
			r.set("types", types);
		}
	}
	
	
	/**
	 * 获取拼音
	 * @param name
	 * @return
	 */
	public String getPinyinByName(String name){
		return PinYin.getPinYin(name);
	}
	
	
	/**
	 * 获取list中的外键id
	 * @param list
	 * @param column
	 * @return
	 */
	public String getIdsByList(List<Record> list, String column){
		String ids = "";
		for(Record r : list){
			Integer fid = r.getInt(column);
			ids += "[" + fid + "],";
		}
		return ids;
	}
}
