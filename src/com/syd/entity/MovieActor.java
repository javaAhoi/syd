package com.syd.entity;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;
import com.syd.entity.Constant.QueryType;

/**
 * @author FHC
 * @文件名: MovieActor.java
 * @类路径: com.syd.dao
 * @描述: 电影演员
 * @时间: 2015年10月29日下午10:37:11
 */
public class MovieActor extends Model<MovieActor> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final MovieActor dao = new MovieActor();
	
	
	/**
	 * 根据电影id获取演员表
	 * @param movie_id
	 * @return
	 */
	public List<Record> getByMovieId(Object movie_id, Integer limit){
		
		String sql = "select * from syd_movie_act_2_m a2 left join syd_movie_actor a on a2.actor_id = a.id where a2.movie_id = ?";
		
		if(limit != null)
			sql += " limit " + limit;
		
		return Db.find(sql, movie_id);
	}
	
	public List<Record> getList(){
		return Db.find("select * from syd_movie_actor");
	}
	
	
	/**
	 * 根据演员名获取
	 * @param name
	 * @param type  
	 * @return
	 */
	public List<Record> getByName(String name, QueryType queryType){
		StringBuffer sb = new StringBuffer();
		sb.append(" select * from syd_movie_actor where 1=1");
		
		if(StringUtils.isNotEmpty(name))
			if(queryType.equals(QueryType.like)){
				sb.append(" and name like '%" + name + "%'");
			}
		
			if(queryType.equals(QueryType.eq)){
				sb.append(" and name = '" + name + "'");
			}
			
		
		sb.append(" order by create_time desc");
		
		return Db.find(sb.toString());
	}
	
	
	/**
	 * 获取对象
	 * @param name
	 * @return
	 */
	public Record getByNameEQ(String name){
		List<Record> list = getByName(name, QueryType.eq);
		if(list != null && list.size() > 0){
			return list.get(0);
		}else{
			return null;
		}
	}
	
	
}
