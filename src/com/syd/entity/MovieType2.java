package com.syd.entity;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;

/**
 * @author FHC
 * @文件名: MovieType.java
 * @类路径: com.syd.dao
 * @描述: 电影类型
 * @时间: 2015年10月29日下午10:40:46
 */
public class MovieType2 extends Model<MovieType2> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieType2 dao = new MovieType2();
	
	/**
	 * 根据movie_id删除
	 * @param movie_id
	 * @return 
	 */
	public int deleteByMovieId(Object movie_id){
		String sql = "delete from syd_movie_type_2_m where movie_id = ?";
		
		return Db.update(sql, movie_id);
	}
}
