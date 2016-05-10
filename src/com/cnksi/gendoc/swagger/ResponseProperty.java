package com.cnksi.gendoc.swagger;

import java.util.HashMap;
import java.util.Map;

import com.cnksi.gendoc.model.Col;

public class ResponseProperty {
	private String name;
	private String description;
	private String type = "string";

	Map<String, Object> result;
	
	public ResponseProperty(String name,String description,String type){
		this.name = name;
		this.description = description;
		this.type = type;
	}
	
	public ResponseProperty(Col col) {
		this.name = col.getName();
		this.description = col.getComment();
	}

	public Map<String, Object> getJsonMap(){
		if(result == null){
			result = new HashMap<String, Object>();
			result.put("description", description);
			result.put("type", type);
		}
		return result;
	}

	public String getName() {
		return name;
	}

}
