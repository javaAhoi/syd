package com.cnksi.gendoc;

import java.util.ArrayList;
import java.util.List;

public class Table {
	private String name;
	private List<String> cols = new ArrayList<String>();
	
	public Table(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getCols() {
		return cols;
	}

	public void setCols(List<String> cols) {
		this.cols = cols;
	}
	
	
	
	
}
