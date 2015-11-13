package com.syd.entity;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

/**
 * @author FHC
 * @文件名: MovieType.java
 * @类路径: com.syd.dao
 * @描述: 电影类型
 * @时间: 2015年10月29日下午10:40:46
 */
public class MovieType extends Model<MovieType> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieType dao = new MovieType();
	
	
	/**
	 * 根据电影id获取类型
	 * @param movie_id
	 * @return
	 */
	public List<Record> getByMovieId(Object movie_id, Integer limit){
		
		String sql = "select * from syd_movie_type_2_m t2 left join syd_movie_type t on t2.type_id = t.id where t2.movie_id = ?";
		
		if(limit != null)
			sql += " limit " + limit;
		
		return Db.find(sql, movie_id);
	}
	
	
	public List<Record> getList(){
		return Db.find("select * from syd_movie_type order by create_time desc");
	}
	
	
	/**
	 * 根据类型名获取
	 * @param name
	 * @return
	 */
	public List<Record> getByNameLike(String name){
		StringBuffer sb = new StringBuffer();
		sb.append(" select * from syd_movie_type where 1=1");
		
		if(StringUtils.isNotEmpty(name))
			sb.append(" and name like '%" + name + "%'");
		
		sb.append(" order by create_time desc");
		
		return Db.find(sb.toString());
	}
	
	
}
