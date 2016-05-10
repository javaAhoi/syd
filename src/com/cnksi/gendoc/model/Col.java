package com.cnksi.gendoc.model;


public class Col {
	private String name;
	private String comment;
	public Col(String name) {
		this.name = name;
	}
	public Col(String name,String comment) {
		this.name = name;
		this.comment = comment;
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
	
	

}
