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
	
	public List<Record> getList(){
		return Db.find("select * from syd_movie");
	}
	
	
	
}
