package com.syd.utils;

import java.io.UnsupportedEncodingException;

public class WebUtils {

	
	/**
	 * iso 转 utf
	 * @param s
	 * @return
	 */
	public static String iso2utf(String s){
		try {
			return new String(s.getBytes("iso-8859-1"),"utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
