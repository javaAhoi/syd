package com.syd.utils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import com.jfinal.upload.UploadFile;

public class FileUtil {

    /**
     * 递归查找文件
     * @param baseDirName 查找的文件夹路径
     * @param targetFileName 需要查找的文件名,可以匹配正则表达式
     */
    public static List<String> findFiles(String baseDirName, String targetFileName) {
        /**
         * 算法简述： 从某个给定的需查找的文件夹出发，搜索该文件夹的所有子文件夹及文件， 若为文件，则进行匹配，匹配成功则加入结果集，若为子文件夹，则进队列。 队列不空，重复上述操作，队列为空，程序结束，返回结果。
         */
        List<String> classFiles = new ArrayList<String>();
        String tempName = null;
        // 判断目录是否存在
        File baseDir = new File(baseDirName);
        if (!baseDir.exists() || !baseDir.isDirectory()) {
            
        } else {
            String[] filelist = baseDir.list();
            for (int i = 0; i < filelist.length; i++) {
                File readfile = new File(baseDirName + File.separator + filelist[i]);
                if (readfile.isDirectory()) {
                    classFiles.addAll(findFiles(baseDirName + File.separator + filelist[i], targetFileName));
                } else {
                    tempName = readfile.getName();
                    if (wildcardMatch(targetFileName, tempName)) {
                        String classname;
                        String tem = readfile.getAbsoluteFile().toString().replaceAll("\\\\", "/");
                        classname = tem.substring(tem.indexOf("/classes") + "/classes".length() + 1,
                                tem.indexOf(".class"));
                        classFiles.add(classname.replaceAll("/", "."));
                    }
                }
            }
        }
        return classFiles;
    }
    


    /**
     * 通配符匹配
     * @param pattern 通配符模式
     * @param str
     */
	private static boolean wildcardMatch(String pattern, String str) {
        int patternLength = pattern.length();
        int strLength = str.length();
        int strIndex = 0;
        char ch;
        for (int patternIndex = 0; patternIndex < patternLength; patternIndex++) {
            ch = pattern.charAt(patternIndex);
            if (ch == '*') {
                // 通配符星号*表示可以匹配任意多个字符
                while (strIndex < strLength) {
                    if (wildcardMatch(pattern.substring(patternIndex + 1), str.substring(strIndex))) {
                        return true;
                    }
                    strIndex++;
                }
            } else if (ch == '?') {
                // 通配符问号?表示匹配任意一个字符
                strIndex++;
                if (strIndex > strLength) {
                    // 表示str中已经没有字符匹配?了。
                    return false;
                }
            } else {
                if ((strIndex >= strLength) || (ch != str.charAt(strIndex))) {
                    return false;
                }
                strIndex++;
            }
        }
        return strIndex == strLength;
	}



	/**
	 * 重命名文件
	 * @param file
	 * @param name 新的文件名称
	 * @return 新文件的File对象
	 */
	public static File rename(UploadFile file, String name){

		//原来File对象
//		String path = file.getSaveDirectory();
//		String originalFileName = file.getFileName();
//		File f = new File(path + "\\" + originalFileName);
		File f = file.getFile();
		
		//新的file对象
		String destpath = f.getParent() + File.separator + name;
		File dest = new File(destpath);
		
		//重命名
		f.renameTo(dest);
		
		return dest;
	}
	
	/**
	 * 获取不重复的文件
	 * @param srcName
	 * @return
	 */
	public static String uniqueFileName(String srcName){
		String uniqueString = new SimpleDateFormat("yyyyMMddHHmmss-").format(new Date())+UUID.randomUUID();
		if(srcName.lastIndexOf(".") != -1){
			return  uniqueString + srcName.substring(srcName.lastIndexOf("."));
		}else{
			return uniqueString + ".jpg";
		}
	
		
	}
	
	/**
	 * 重命名：yyyyMMddHHmmss-uuid>..
	 * @param file
	 * @return
	 */
	public static File renameToUniqueFileName(UploadFile file){
		String name = uniqueFileName(file.getFileName());
		return rename(file, name);
		
	}
	
	
	/**
	 * @return 返回值包含路径名:"upload/movieImg/1.jpg" 
	 */
	public static String compressPic(long maxPicSize, File file, int width, int height) {
		if(file != null && file.exists()){
			ImageCompressUtil im = new ImageCompressUtil(false);
			String fileName = file.getAbsolutePath();
			
			int index = fileName.lastIndexOf(".");
			String fileType = fileName.substring(index);
			if(index > -1){
				fileName = fileName.substring(0,index) + fileType;
				file.renameTo(new File(fileName));
			}
			
			String newFileName = fileName.substring(0, fileName.lastIndexOf("."))+fileType;
			File newFile = new File(newFileName);
			
			// 压缩图片尺寸为：150*200  ，并修改原有尺寸比例
			boolean success = im.compressPic(file, newFile, width, height, Constant.Bfalse);
			if(success){
				return SydResource.MovieImgFolder.getPath()+newFile.getName();
			}
		}
		
		return SydResource.MovieImgFolder.getPath()+file.getName();
	}

	
	/**
	 * 删除图片
	 * @return
	 */
	public static boolean deleteFile(File file){
		
		boolean flag = false;
		
		// 路径为文件且不为空则进行删除  
	    if (file.isFile() && file.exists()) {  
	        file.delete();  
	        flag = true;  
	    }  else{
	    	System.err.println("文件不存在！");
	    }
		
		return flag;
	}
}
