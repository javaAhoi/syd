package com.syd;


public class Test {
	public static void main(String[] args) {
			
		System.out.println(isInteger("2.0"));
		
	
	}
	
	
	
	public static boolean isInteger(String input){  
       
		Integer index = input.indexOf(".");
		if(index == -1){
			return true;
		}
		
//		String fix = input.substring(index, input.length());
		
		
		return true;
    }  
}
