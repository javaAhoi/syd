package com.cnksi.gendoc.model;

import com.cnksi.gendoc.annotations.DocPara;


public class ResultPara {
	private String name;
	private String comment;
	private String type;
	private String exampleValue;
	
	public ResultPara(DocPara docPara) {
		this.name = docPara.name();
		this.comment = docPara.comment();
		this.type = docPara.type();
		this.exampleValue = docPara.exampleValue();
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getExampleValue() {
		return exampleValue;
	}

	public void setExampleValue(String exampleValue) {
		this.exampleValue = exampleValue;
	}
	
	
}
