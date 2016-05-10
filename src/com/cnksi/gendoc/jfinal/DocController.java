package com.cnksi.gendoc.jfinal;

import java.util.ArrayList;
import java.util.List;

import com.cnksi.gendoc.DocUtil;
import com.cnksi.gendoc.model.ResultAction;
import com.cnksi.gendoc.swagger.Path;
import com.cnksi.gendoc.swagger.SwaggerResult;
import com.jfinal.core.Action;
import com.jfinal.core.Controller;
import com.jfinal.core.JFinal;

/**
 * IndexController
 */
public class DocController extends Controller {
	private static List<ResultAction> result; 
	
	public void index() {
		redirect("/swagger/index.html?url="+getRequest().getContextPath()+"/jfinal/doc/getSwaggerJson");
	}
	
	public void jsp(){
		if(result == null){
		result = getResultActions();
	}
	
	setAttr("actoins", result);
	}
	
	public void getSwaggerJson(){
		List<Path> paths = new ArrayList<Path>();
		List<ResultAction> actions = getResultActions();
		for (ResultAction resultAction : actions) {
			paths.add(new Path(resultAction));
		}
		
		SwaggerResult swaggerResult = new SwaggerResult(getRequest().getContextPath(),paths ,null,null);
		
		renderJson(swaggerResult.getJsonMap());
		
	}

	private List<ResultAction> getResultActions() {
		List<ResultAction> result = new ArrayList<ResultAction>();
		
		List<String> allActionKeys = JFinal.me().getAllActionKeys();
		for (String actionkey : allActionKeys) {
			
			Action action = JFinal.me().getAction(actionkey, null);
			
			ResultAction resultAction = DocUtil.getResultActionFromMethod(actionkey,action.getMethod());
			if(resultAction != null){
				result.add(resultAction);
			}
		}
		
		return result;
	}

}
