package com.cnksi.gendoc.model;

import java.util.ArrayList;
import java.util.List;

import com.cnksi.gendoc.DocUtil;
import com.cnksi.gendoc.annotations.DocAction;
import com.cnksi.gendoc.annotations.DocPara;
import com.cnksi.gendoc.annotations.DocResponse;
import com.cnksi.gendoc.jfinal.JfinalDbQuery;

public class ResultAction {
	private String comment;
	private String actionKey;
	private String tryUrl;
	
	private List<ResultPara> paras;
	
	private List<Col> cols;


	public ResultAction(String actionKey, DocAction docAction, List<DocPara> docParas, DocResponse docResponse) {
		this.actionKey = actionKey;
		this.comment = docAction.comment();
		
		this.paras = new ArrayList<ResultPara>();
		StringBuilder url = new StringBuilder(actionKey+"?");
		
		for (DocPara docPara : docParas) {
			url.append("&"+docPara.name()+"="+docPara.exampleValue()+"");
			
			ResultPara para = new ResultPara(docPara);
			paras.add(para);
		}
		this.tryUrl = url.toString();
		
		if(docResponse!=null){
			this.cols = DocUtil.getReturnColDoc(docResponse.selectSql(), JfinalDbQuery.getInstance());
		}
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getTryUrl() {
		return tryUrl;
	}

	public void setTryUrl(String tryUrl) {
		this.tryUrl = tryUrl;
	}

	public List<ResultPara> getParas() {
		return paras;
	}

	public void setParas(List<ResultPara> paras) {
		this.paras = paras;
	}

	public String getActionKey() {
		return actionKey;
	}

	public void setActionKey(String actionKey) {
		this.actionKey = actionKey;
	}

	public List<Col> getCols() {
		return cols;
	}

	public void setCols(List<Col> cols) {
		this.cols = cols;
	}

}
