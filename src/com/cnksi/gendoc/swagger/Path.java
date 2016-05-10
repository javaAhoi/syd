package com.cnksi.gendoc.swagger;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.cnksi.gendoc.model.Col;
import com.cnksi.gendoc.model.ResultAction;
import com.cnksi.gendoc.model.ResultPara;

@SuppressWarnings("unchecked")
public class Path {
	private String url;
	private String method = "get";
	private String summary;
	private String description = "";
	private List<Parameter> parameters;
	private List<ResponseProperty> properties;
	
	Map<String, Object> result;
	
	public Path(ResultAction resultAction) {
		this.url = resultAction.getActionKey();
		this.summary = resultAction.getComment();
		
		parameters = new ArrayList<Parameter>();
		for (ResultPara para : resultAction.getParas()) {
			parameters.add(new Parameter(para));
		}
		
		properties = new ArrayList<ResponseProperty>();
		for (Col col : resultAction.getCols()) {
			properties.add(new ResponseProperty(col));
		}
	}

	public Map<String, Object> getJsonMap(){
		if(result == null){
			result = Utils.getConfig("Path.json", getClass());
			
			Map<String, Object> methodMap = (Map<String, Object>) result.get("get");
			result.put(method, methodMap);
			
			methodMap.put("summary", summary);
			methodMap.put("description", description);
			 
			 //parameters
			List<Map<String, Object>> parametersMap = new ArrayList<Map<String, Object>>();
			methodMap.put("parameters",parametersMap);
			
			for (Parameter parameter : parameters) {
				parametersMap.add(parameter.getJsonMap());
			}
			 
			 
			 //responses
			Map<String, Object> responseMap = (Map<String, Object>) methodMap.get("responses");
			Map<String, Object> response200Map = (Map<String, Object>) responseMap.get("200");
			Map<String, Object> schemaMap = (Map<String, Object>) response200Map.get("schema");
			Map<String, Object> propertiesMap = new HashMap<String, Object>();
			schemaMap.put("properties", propertiesMap);
			
			for (ResponseProperty property : properties) {
				propertiesMap.put(property.getName(),property.getJsonMap());
			}
			
			
		}
		return result;
	}
	
	public String getUrl() {
		return url;
	}
}
