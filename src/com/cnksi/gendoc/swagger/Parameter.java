package com.cnksi.gendoc.swagger;

import java.util.HashMap;
import java.util.Map;
import com.cnksi.gendoc.model.ResultPara;

public class Parameter {
	String name;
	String description;
	boolean required = false;
	String in = "query";
	String type;
	Object defaultValue;

	Map<String, Object> result;
	
	public Parameter(String name,String description,boolean required,String type,Object defaultValue){
		this.name = name;
		this.description = description;
		this.required = required;
		this.type = type;
		this.defaultValue = defaultValue;
	}
	
	public Parameter(ResultPara para) {
		this.name = para.getName();
		this.description = para.getComment();
		this.type = para.getType();
		this.defaultValue = para.getExampleValue();
	}

	public Map<String, Object> getJsonMap(){
		if(result == null){
			result = new HashMap<String, Object>();
			result.put("name", name);
			result.put("description", description);
			result.put("required", required);
			result.put("in", in);
			result.put("type", type);
			result.put("default", defaultValue);
		}
		return result;
	}

}
