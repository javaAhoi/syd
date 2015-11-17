package com.syd.utils;

public enum SydResource {

	MovieImgFolder(0, "/upload/",true),
	
	;
	
	private int index;
	
	private boolean deleteAble;
	
	private String path;

	private SydResource(int index, String path,boolean deleteAble) {
		this.index = index;
		this.path = path;
		this.deleteAble=deleteAble;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public boolean isDeleteAble() {
		return deleteAble;
	}

	public void setDeleteAble(boolean deleteAble) {
		this.deleteAble = deleteAble;
	}

	public static SydResource valueByIndex(int index) {
		for (SydResource month : SydResource.values()) {
			if (month.getIndex() == index) {
				return month;
			}
		}
		return null;
	}
}
