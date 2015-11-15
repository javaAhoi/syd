package com.syd.entity;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;

/**
 * @author FHC
 * @文件名: MovieArea2.java
 * @类路径: com.syd.dao
 * @描述: 电影地区对应关系
 * @时间: 2015年11月13日22:13:10
 */
public class MovieArea2 extends Model<MovieArea2> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieArea2 dao = new MovieArea2();
	
	
	/**
	 * 根据movie_id删除
	 * @param movie_id
	 * @return 
	 */
	public int deleteByMovieId(Object movie_id){
		String sql = "delete from syd_movie_area_2_m where movie_id = ?";
		
		return Db.update(sql, movie_id);
	}
}
