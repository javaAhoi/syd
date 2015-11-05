package com.syd.entity;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

/**
 * @author FHC
 * @文件名: MovieYear.java
 * @类路径: com.syd.dao
 * @描述: 电影年代
 * @时间: 2015年11月5日16:21:53
 */
public class MovieYear extends Model<MovieYear> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieYear dao = new MovieYear();
	
	
	
	
	public List<Record> getList(){
		return Db.find("select * from syd_movie_year order by create_time desc");
	}
	
	
	/**
	 * 根据年代名获取
	 * @param name
	 * @return
	 */
	public List<Record> getByNameLike(String name){
		StringBuffer sb = new StringBuffer();
		sb.append(" select * from syd_movie_year where 1=1");
		
		if(StringUtils.isNotEmpty(name))
			sb.append(" and name like '%" + name + "%'");
		
		sb.append(" order by create_time desc");
		
		return Db.find(sb.toString());
	}
	
	
}
