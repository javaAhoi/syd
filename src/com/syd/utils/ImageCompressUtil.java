/**
 * 缩略图实现，将图片(jpg、bmp、png、gif等等)真实的变成想要的大小
 */
package com.syd.utils;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import javax.imageio.ImageIO;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

/******************************************************************************* 
 * 缩略图类（通用） 本java类能将jpg、bmp、png、gif图片文件，进行等比或非等比的大小转换。 具体使用方法 
 * compressPic(大图片路径,生成小图片路径,大图片文件名,生成小图片文名,生成小图片宽度,生成小图片高度,是否等比缩放(默认为true)) 
 */
public class ImageCompressUtil {
	private File inputFile; // 输入图文件
	private File outputFile; // 输出图文件

	private Integer outputWidth = 2000; // 默认输出图片宽
	private Integer outputHeight = 2000; // 默认输出图片高
	private boolean proportion = true; // 是否等比缩放标记(默认为等比缩放)
	private boolean stable = true; // 保持原图大小
	private boolean print = false;

	public ImageCompressUtil() { // 初始化变量
	}

	
	/*
	 * 获得图片大小
	 * 传入参数 String path ：图片路径
	 */
	public long getPicSize(String path) {
		File file = new File(path);
		return file.length();
	}

	// 图片处理
	public boolean compressPic() {
		FileOutputStream out = null;
		try {
			// 获得源文件
			if (!inputFile.exists()) {
				return false;
			}
			Image img = ImageIO.read(inputFile);
			
			// 判断图片格式是否正确
			if (img.getWidth(null) == -1) {
				System.out.println(" can't read,retry!" + "<BR>");
				return false;
			} else {
				int newWidth;
				int newHeight;
				if(print)
					System.out.println("原图宽、高：" + img.getWidth(null) + "," + img.getHeight(null));
				// 保持原图大小
				if (stable) {
					newWidth = img.getWidth(null);
					newHeight = img.getHeight(null);
				} else {
					// 判断是否是等比缩放
					if (this.proportion) {
						// 为等比缩放计算输出的图片宽度及高度
						double rate1 = ((double) img.getWidth(null)) / (double) outputWidth + 0.1;
						double rate2 = ((double) img.getHeight(null)) / (double) outputHeight + 0.1;
						// 根据缩放比率大的进行缩放控制
						double rate = rate1 > rate2 ? rate1 : rate2;
						newWidth = (int) (((double) img.getWidth(null)) / rate);
						newHeight = (int) (((double) img.getHeight(null)) / rate);
					} else {
						newWidth = outputWidth; // 输出的图片宽度
						newHeight = outputHeight; // 输出的图片高度
					}
				}
				BufferedImage tag = new BufferedImage((int) newWidth, (int) newHeight, BufferedImage.TYPE_INT_RGB);

				/*
				 * Image.SCALE_SMOOTH 的缩略算法 生成缩略图片的平滑度的
				 * 优先级比速度高 生成的图片质量比较好 但速度慢
				 */
				tag.getGraphics().drawImage(img.getScaledInstance(newWidth, newHeight, Image.SCALE_SMOOTH), 0, 0, null);
				out = new FileOutputStream(outputFile);
				// JPEGImageEncoder可适用于其他图片类型的转换
				JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);
				encoder.encode(tag);
				return true;
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally{
			try {
				if(out != null) out.close();
			} catch (IOException e) {
			}
		}
		return false;
	}

	public boolean compressPic(String inputFileName, String outputFileName) {
		return compressPic(new File(inputFileName), new File(outputFileName));
	}
	
	public boolean compressPic(File inputFile, File outputFile) {
		// 输入图文件名
		this.inputFile = inputFile;
		// 输出图文件名
		this.outputFile = outputFile;
		return compressPic();
	}
	
	public boolean compressPic(File inputFile, File outputFile, int width, int height, boolean gp) {
		// 输入图文件名
		this.inputFile = inputFile;
		// 输出图文件名
		this.outputFile = outputFile;
		// 设置图片长宽
		setWidthAndHeight(width, height);
		// 是否是等比缩放 标记
		this.proportion = gp;

		return compressPic();
	}
	
	public boolean compressPic(String inputFile, String outputFile, int width, int height, boolean gp) {
		return compressPic(new File(inputFile), new File(outputFile), width, height, gp);
	}

	// main测试
	// compressPic(大图片路径,生成小图片路径,大图片文件名,生成小图片文名,生成小图片宽度,生成小图片高度,是否等比缩放(默认为true))
	public static void main(String[] arg) {
		ImageCompressUtil mypic = new ImageCompressUtil();
		System.out.println("输入的图片大小：" + mypic.getPicSize("e:\\1.jpg") / 1024 + "KB");
		int count = 0; // 记录全部图片压缩所用时间
		int start = (int) System.currentTimeMillis(); // 开始时间
		mypic.compressPic("e:\\1.jpg", "e:\\r1.jpg", 1200, 1200, true);
		int end = (int) System.currentTimeMillis(); // 结束时间
		int re = end - start; // 但图片生成处理时间
		count += re;
		System.out.println("图片压缩处理使用了: " + re + "毫秒");
		System.out.println("输出的图片大小：" + mypic.getPicSize("e:\\test\\r1.jpg") / 1024 + "KB");
		System.out.println("总共用了：" + count + "毫秒");
	}
	
	
	
	
	
	public ImageCompressUtil(boolean stable){
		this.stable = stable;
	}
	
	public File getInputFile() {
		return inputFile;
	}

	public void setInputFile(File inputFile) {
		this.inputFile = inputFile;
	}

	public File getOutputFile() {
		return outputFile;
	}

	public void setOutputFile(File outputFile) {
		this.outputFile = outputFile;
	}

	public Integer getOutputWidth() {
		return outputWidth;
	}

	public void setOutputWidth(Integer outputWidth) {
		this.outputWidth = outputWidth;
	}

	public Integer getOutputHeight() {
		return outputHeight;
	}

	public void setOutputHeight(Integer outputHeight) {
		this.outputHeight = outputHeight;
	}

	public boolean isProportion() {
		return proportion;
	}

	public void setProportion(boolean proportion) {
		this.proportion = proportion;
	}

	public boolean isStable() {
		return stable;
	}

	public void setStable(boolean stable) {
		this.stable = stable;
	}

	public boolean isPrint() {
		return print;
	}

	public void setPrint(boolean print) {
		this.print = print;
	}

	public void setOutputWidth(int outputWidth) {
		this.outputWidth = outputWidth;
	}

	public void setOutputHeight(int outputHeight) {
		this.outputHeight = outputHeight;
	}

	public void setWidthAndHeight(int width, int height) {
		this.outputWidth = width;
		this.outputHeight = height;
	}
}