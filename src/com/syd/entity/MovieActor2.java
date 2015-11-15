package com.syd.entity;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;

/**
 * @author FHC
 * @文件名: MovieActor2.java
 * @类路径: com.syd.dao
 * @描述: 电影演员对应关系
 * @时间: 2015年11月13日22:39:46
 */
public class MovieActor2 extends Model<MovieActor2> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieActor2 dao = new MovieActor2();
	
	/**
	 * 根据movie_id删除
	 * @param movie_id
	 * @return 
	 */
	public int deleteByMovieId(Object movie_id){
		String sql = "delete from syd_movie_act_2_m where movie_id = ?";
		
		return Db.update(sql, movie_id);
	}
	
	
}
