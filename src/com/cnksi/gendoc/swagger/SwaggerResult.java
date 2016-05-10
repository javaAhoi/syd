package com.cnksi.gendoc.swagger;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@SuppressWarnings("unchecked")
public class SwaggerResult {
	private String title;
	private String description;
	private String basePath;
	private List<Path> paths;
	
	Map<String, Object> result;
	
	/**
	 * @param paths
	 * @param title 为空去模板中的值
	 * @param description 为空去模板中的值
	 */
	public SwaggerResult(String basePath,List<Path> paths,String title,String description){
		this.basePath = basePath;
		this.title = title;
		this.description = description;
		this.paths = paths;
	}

	public Map<String, Object> getJsonMap(){
		if(result == null){
			result = Utils.getConfig("SwaggerResult.json",getClass());
			
			result.put("basePath", basePath);
			
			Map<String, Object> info = (Map<String, Object>) result.get("info");
			if(title != null) info.put("title", title);
			if(description != null) info.put("description",description);
			
			Map<String, Object> pathMap = new LinkedHashMap<String,Object>();
			for (Path path : paths) {
				pathMap.put(path.getUrl(), path.getJsonMap());
			}
			result.put("paths", pathMap);
			
		}
		return result;
	}
}
