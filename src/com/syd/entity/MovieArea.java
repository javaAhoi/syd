package com.syd.entity;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

/**
 * @author FHC
 * @文件名: MovieArea.java
 * @类路径: com.syd.dao
 * @描述: 电影地区
 * @时间: 2015年11月3日13:17:30
 */
public class MovieArea extends Model<MovieArea> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieArea dao = new MovieArea();
	
	
	/**
	 * 根据电影id获取地区
	 * @param movie_id
	 * @return
	 */
	public List<Record> getByMovieId(Object movie_id, Integer limit){
		
		String sql = "select * from syd_movie_area_2_m a2 left join syd_movie_area a on a2.area_id = a.id where a2.movie_id = ?";
		
		if(limit != null)
			sql += " limit " + limit;
		
		return Db.find(sql, movie_id);
	}
	
	
	public List<Record> getList(){
		return Db.find("select * from syd_movie_area order by create_time desc");
	}
	
	
	/**
	 * 根据地区名获取
	 * @param name
	 * @return
	 */
	public List<Record> getByNameLike(String name){
		StringBuffer sb = new StringBuffer();
		sb.append(" select * from syd_movie_area where 1=1");
		
		if(StringUtils.isNotEmpty(name))
			sb.append(" and name like '%" + name + "%'");
		
		sb.append(" order by create_time desc");
		
		return Db.find(sb.toString());
	}
	
	
}
