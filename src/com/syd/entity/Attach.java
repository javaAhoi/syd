package com.syd.entity;

import java.util.Date;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Record;

/**
 * @author FHC
 * @文件名: Image.java
 * @类路径: com.syd.entity
 * @描述: 电影图片表
 * @时间: 2015年11月14日16:50:24
 */
public class Attach extends Model<Attach> {

	private static final long serialVersionUID = 149683229129357784L;

	public static final Attach dao = new Attach();
	
	
	
	/**
	 * 根据movie_id获取附件列表
	 * @param movie_id
	 * @return 
	 */
	public List<Record> getByMovieId(Object movie_id){
		String sql = "select * from syd_movie_attach where movie_id = ?";
		
		return Db.find(sql, movie_id);
	}
	
	
	/**
	 * fineupload上传附件
	 * 返回该附件的id，并append到表单隐藏域，表单提交后根据id更新movie_id字段
	 * @return
	 */
	public Attach saveUploadFile(Integer movie_id, String qqfilename, String url) {
		
		Attach model = new Attach();
		model.set("movie_id", movie_id);
		model.set("name", qqfilename);
		model.set("url", url);
		model.set("create_time", new Date());
		model.save();
		
		return model;
	}
	
	
	/**
	 * 根据主键更新movie_id
	 * @param movie_id
	 * @param pks		主键id，以逗号分隔
	 */
	public void updateMovieIdByPks(Integer movie_id, String pks){
		
		String[] arr = pks.split(",");
		if(arr != null){
			for(String id : arr){
				//更新
				Attach model = findById(id);
				model.set("movie_id", movie_id);
				model.update();
			}
		}
	}
	
}
