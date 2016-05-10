package com.cnksi.gendoc.jfinal;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.cnksi.gendoc.IDbQuery;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class JfinalDbQuery implements IDbQuery{
	private static JfinalDbQuery instance;
	public static JfinalDbQuery getInstance(){
		if(instance == null){
			instance = new JfinalDbQuery();
		}
		return instance;
	}
	private JfinalDbQuery() {
	}

	@Override
	public List<Map<String, Object>> query(String sql) {
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		
		List<Record> find = Db.find(sql);
		for (Record record : find) {
			result.add(record.getColumns());
		}
		
		return result;
	}

}
