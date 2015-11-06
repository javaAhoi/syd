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
			List<Record> actors = MovieActor.dao.getByMovieId(movie_id);
			for(Record r2: actors){
				String pinyin = getPinyinByName(r2.getStr("name"));
				r2.set("pinyin", pinyin);
			}
			r.set("actors", actors);
			
			//获取电影类型list
			List<Record> types = MovieType.dao.getByMovieId(movie_id);
			for(Record r2: types){
				String pinyin = getPinyinByName(r2.getStr("name"));
				r2.set("pinyin", pinyin);
			}
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
}