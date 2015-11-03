package com.syd.utils;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

public class PinYin {
	 public static String getPinYin(String src) 
	    { 
	        if(src == null || "".endsWith(src)) { 
	            return ""; 
	        } 
	        char[] words = src.toCharArray(); 
	        int wordCount = words.length; 
	        String[] pinyin = new String[wordCount]; 

	        // 设置汉字拼音输出的格式 
	        HanyuPinyinOutputFormat outputFormat = new HanyuPinyinOutputFormat(); 
	        outputFormat.setCaseType(HanyuPinyinCaseType.LOWERCASE); 
	        outputFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE); 
	        outputFormat.setVCharType(HanyuPinyinVCharType.WITH_V); 

	        StringBuffer sb = new StringBuffer(); 
	        try 
	        { 
	            for (int i = 0; i < wordCount; i++) 
	            { 
	                // 判断能否为汉字字符 
	                if (Character.toString(words[i]).matches("[\\u4E00-\\u9FA5]+")) 
	                { 
	                    pinyin = PinyinHelper.toHanyuPinyinStringArray(words[i], outputFormat);// 将汉字的几种全拼都存到t2数组中
	                     sb.append(pinyin[0]);// 取出该汉字全拼的第一种读音并连接到字符串t4后 
	                } 
	                else 
	                { 
	                    // 如果不是汉字字符，间接取出字符并连接到字符串t4后 
	                    sb.append(Character.toString(words[i])); 
	                } 
	            } 
	        } 
	        catch (BadHanyuPinyinOutputFormatCombination e) 
	        { 
	            e.printStackTrace(); 
	        } 
	        return sb.toString(); 
	    } 

	    /** 
	     * 提取每个汉字的首字母 
	     * 
	     * @param str 
	     * @return String 
	     */ 
	    public static String getPinYinHeadChar(String str) 
	    { 
	        String convert = ""; 
	        for (int j = 0; j < str.length(); j++) 
	        { 
	            char word = str.charAt(j); 
	            // 提取汉字的首字母 
	            String[] pinyinArray = PinyinHelper.toHanyuPinyinStringArray(word); 
	            if (pinyinArray != null) 
	            { 
	                convert += pinyinArray[0].charAt(0); 
	            } 
	            else 
	            { 
	                convert += word; 
	            } 
	        } 
	        return convert; 
	    } 

	    /** 
	     * 将字符串转换成ASCII码 
	     * 
	     * @param cnStr 
	     * @return String 
	     */ 
	    public static String getCnASCII(String cnStr) 
	    { 
	        StringBuffer strBuf = new StringBuffer(); 
	        // 将字符串转换成字节序列 
	        byte[] bGBK = cnStr.getBytes(); 
	        for (int i = 0; i < bGBK.length; i++) 
	        { 
	        // 将每个字符转换成ASCII码 
	            strBuf.append(Integer.toHexString(bGBK[i] & 0xff)); 
	        } 
	        return strBuf.toString(); 
	    } 
	    
	    public static String getPinYinHeadFirstChar(String str){
	    	if(str==null||"".equals(str)){
	    		return null;
	    	}
	    	return getPinYinHeadChar(str).substring(0,1);
	    }
}
