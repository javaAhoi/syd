package com.syd.entity;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

/**
 * @author FHC
 * @文件名: Movie.java
 * @类路径: com.syd.dao
 * @描述: 电影库
 * @时间: 2015年10月29日下午10:14:08
 * 
 * CREATE TABLE `syd_movie` (
  `id` 			int(11) 	
  `name` 		varchar(255) 	
  `name2` 		varchar(255) 	
  `name3` 		varchar(255) 	
  `minute` 		int(11) 	
  `year` 		int(11) 	
  `sy_time` 	varchar(255) 	
  `info` 		text 	
  PRIMARY KEY (`id`)
) 	
 */
public class Movie extends Model<Movie> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final Movie dao = new Movie();
	
	/**
	 * 查询列表
	 * @return
	 */
	public List<Record> getList(){
		String select = " select m.*, l.name as lan, y.name as year ";
		
		String sql = " from syd_movie m left join syd_movie_language l on l.id = m.language_id "
									+ " left join syd_movie_year y on y.id = m.year_id ";
		
		return Db.find(select + sql);
	}
	
	
	/**
	 * 根据主键id查询对象，left join其他表
	 * @param id
	 * @return 
	 */
	public Record getInfoById(Object id){
		String sql = "select m.*, l.`name` as lan_name from syd_movie m left join syd_movie_language l on l.id = m.language_id where m.id = ?";
		
		return Db.findFirst(sql, id);
	}
	
	
	
}
