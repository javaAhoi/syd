package com.syd.utils;
 
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

public class DateUtils2
{
	public static SimpleDateFormat timeFormater = new SimpleDateFormat("yyyy-MM-dd");
	
	
	//12小时对应的秒
	public static final Integer hours12Ofsecond = 12*60*60;
 
	
	
	/**
	 * 字符串转换为日期，格式：yyyy-MM-dd
	 * @param stringDate
	 * @return
	 */
	public static Date string2Date(String stringDate)
	{
		SimpleDateFormat dd = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try
		{
			date = dd.parse(stringDate);
		} catch (ParseException e)
		{
			e.printStackTrace();
		}
		return date;
	}

	/**
	 * 根据给定的格式，格式化字符串
	 * @param stringDate
	 * @param formatString
	 * @return
	 */
	public static Date string2Date(String stringDate,String formatString)
	{
		SimpleDateFormat dd = new SimpleDateFormat(formatString);
		Date date = null;
		try
		{
			date = dd.parse(stringDate);
		} catch (ParseException e)
		{
			e.printStackTrace();
		}
		return date;
	}
	
	/**
	 * 将一个日期格式转换为其它日期格式
	 * @param date
	 * @param formatStr
	 * @param toFormatStr
	 * @return
	 */
	public static String convertDateStr(String dateStr,String formatStr, String toFormatStr){
		Date date = string2Date(dateStr, formatStr);
		if(date != null){
			return date2String(date, toFormatStr);
		}else{
			return null;
		}
	}
	
	public static String date2String(Date date,String formatStr){
		String str = "";
		SimpleDateFormat sdf = new SimpleDateFormat(formatStr);
		str = sdf.format(date);
		return str;
	}
	
	/**
	 * 格式化日期格式：yyyy-MM-dd
	 * @param date
	 * @return
	 */
	public static String date2String(Date date)
	{
		String str = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		str = sdf.format(date);
		return str;
	}
	
	/**
	 * 
	 * @param date
	 * @return yyyy-MM-dd_HH-mm-ss-sss
	 */
	public static String date2Stringhms(Date date)
	{
		String str = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss-sss");
		str = sdf.format(date);
		return str;
	}
	
	/**
	 * 
	 * @param date
	 * @return yyyy-MM-dd HH:mm:ss
	 */
	public static String date2Stringhms2(Date date)
	{
		String str = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		str = sdf.format(date);
		return str;
	}
	
	public static String date2String2(Date date){
		String str = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
		str = sdf.format(date);
		return str;
	}

	/**
	 * 获取当月第一天
	 * yyyy-MM-dd
	 * @return
	 */
	public static String getFirstDayOfCurrentMonth(){
		
		return getFirstDayOfMonth(null);
	}
	
	/**
	 * 获取某月的第一天
	 * @param month 月份,为空表示当月
	 * @return
	 */
	public static String getFirstDayOfMonth(Integer month){
			String str = "";
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			
			lastDate.set(Calendar.DATE, 1);// 设为当前月的1号
			
			if(month!=null){
				
				lastDate.set(Calendar.MONTH, month-1);		//Calendar.MONTH从0开始
			}
			
			str = sdf.format(lastDate.getTime());
			
			return str;
	}
	
	/**
	 * 获取指定年月的第一天
	 * @param year 2015
	 * @param month 1-12
	 * @return
	 */
	public static String getFirstDayOfMonthForCal(int year, int month){
		Calendar cal = Calendar.getInstance();
		cal.set(year, month - 1, 1);
		return date2String(cal.getTime());
	}
	
	
	/**
	 * 获取指定年月的第一天
	 * @param cal 应包含year和month
	 * @return
	 */
	public static String getFirstDayOfMonthForCal(Calendar cal){
		cal.set(Calendar.DAY_OF_MONTH, 1);
		return date2String(cal.getTime());
	}
	
	/**
	 * 获取指定年月的最后, yyyy-MM-dd
	 * @param year 2015
	 * @param month 1-12
	 * @return
	 */
	public static String getLastDayOfMonthForCal(int year, int month){
		Calendar cal = Calendar.getInstance();
		cal.set(year, month - 1, 1);
		cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
		return date2String(cal.getTime());
	}
	
	/**
	 * 获取指定年月的最后一天, yyyy-MM-dd
	 * @param cal 应包含year和month
	 * @return
	 */
	public static String getLastDayOfMonthForCal(Calendar cal){
		cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
		return date2String(cal.getTime());
	}
	
	/**
	 * 获取某月的最后一天
	 * @param month 鱼粉,为空表示当月
	 * @return
	 */
	public static String getLastDayOfMonth(Integer month){

		String str = "";
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		Calendar lastDate = Calendar.getInstance();
		
		lastDate.set(Calendar.DATE, 1);// 设为当前月的1号
		
		if(month!=null){
			
			lastDate.set(Calendar.MONTH, month-1);		//Calendar.MONTH从0开始
		}
		
		lastDate.add(Calendar.MONTH, 1);// 加一个月，变为下月的1号
		
		lastDate.add(Calendar.DATE, -1);// 减去一天，变为当月最后一天

		str = sdf.format(lastDate.getTime());
		
		return str;
		
	}

	//获取当年当月的总天数
	public static Integer getTotalDayOfMonth(Integer year, Integer month){
		
		Calendar cal = Calendar.getInstance();  
		//当月第一天
		cal.set(year, month - 1, 1);
		return cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		
	}
	
	/**
	 * 计算当月最后一天,返回字符串
	 * yyyy-MM-dd
	 * @return
	 */
	public static String getLastOfCurrentMonth()
	{
		return getLastDayOfMonth(null);
	}

	/**
	 * 获得本年第一天的日期
	 *  yyyy-MM-dd
	 * @return
	 */
	public static String getCurrentYearFirst()
	{
		int yearPlus = DateUtils2.getYearPlus();
		GregorianCalendar currentDate = new GregorianCalendar();
		currentDate.add(GregorianCalendar.DATE, yearPlus);
		Date yearDay = currentDate.getTime();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");// 可以方便地修改日期格式
		String preYearDay = dateFormat.format(yearDay);
		return preYearDay;
	}

	// 获得本年最后一天的日期 *
	public static String getCurrentYearEnd()
	{
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy");// 可以方便地修改日期格式
		String years = dateFormat.format(date);
		return years + "-12-31";
	}
	
	/**
	 * 返回指定年的第一天
	 * @param year
	 * @return
	 */
	public static String getFirstDayOfYear(int year){
		Calendar cal = Calendar.getInstance();
		cal.set(year, 0, 1);
		return date2String(cal.getTime());
	}
	
	/**
	 * 返回指定年的最后一天
	 * @param year
	 * @return
	 */
	public static String getLastDayOfYear(int year){
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, cal.getActualMaximum(Calendar.MONTH));
		cal.set(Calendar.DATE, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
		return date2String(cal.getTime());
	}
	
	public static int getCurrentYear(){
		Calendar cal = Calendar.getInstance();
		int year=cal.get(Calendar.YEAR);
		return year;
	}
	public static int getCalendarCurrentMonth(){
		Calendar cal = Calendar.getInstance();
		int month=cal.get(Calendar.MONTH);
		return month;
	}
	private static int getYearPlus()
	{
		Calendar cd = Calendar.getInstance();
		int yearOfNumber = cd.get(Calendar.DAY_OF_YEAR);// 获得当天是一年中的第几天
		cd.set(Calendar.DAY_OF_YEAR, 1);// 把日期设为当年第一天
		cd.roll(Calendar.DAY_OF_YEAR, -1);// 把日期回滚一天。
		int MaxYear = cd.get(Calendar.DAY_OF_YEAR);
		if (yearOfNumber == 1)
		{
			return -MaxYear;
		} else
		{
			return 1 - yearOfNumber;
		}
	}

	//获取月份对应的第几季度
	public static int getSeasonOfMonth(int month){
		int season = 1;
		if (month >= 1 && month <= 3)
		{
			season = 1;
		}
		if (month >= 4 && month <= 6)
		{
			season = 2;
		}
		if (month >= 7 && month <= 9)
		{
			season = 3;
		}
		if (month >= 10 && month <= 12)
		{
			season = 4;
		}
		
		return season;
	}
	
	//获取本月对应的上一个季度
	public static String getLastSeasonOfMoney(int month){
		int year = getCurrentYear();
		
		int season = getSeasonOfMonth(month);
		season--;
		
		//如果本季度为第一个季度， 则上季度为去年第4季度
		if(season == 0){
			season = 4;
			year--;
		}
		
		return year + ";" + season;
	}
	
	
	/**
     * 获得本季度   yyyy-MM-dd;yyyy-MM-dd
	 * @param month
	 * @return
	 */
	public static String getThisSeasonTime(int month)
	{
		int array[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10, 11, 12 } };
		int season = 1;
		if (month >= 1 && month <= 3)
		{
			season = 1;
		}
		if (month >= 4 && month <= 6)
		{
			season = 2;
		}
		if (month >= 7 && month <= 9)
		{
			season = 3;
		}
		if (month >= 10 && month <= 12)
		{
			season = 4;
		}
		int start_month = array[season - 1][0];
		int end_month = array[season - 1][2];

		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy");// 可以方便地修改日期格式
		String years = dateFormat.format(date);
		int years_value = Integer.parseInt(years);

		int start_days = 1;// years+"-"+String.valueOf(start_month)+"-1";//getLastDayOfMonth(years_value,start_month);
		int end_days = DateUtils2.getLastDayOfMonth(years_value, end_month);
		
		String start_month2 = "", start_days2 = "", end_month2 = "", end_days2 = "";
		if(start_month < 10)
			start_month2 = "0" + start_month;
		else
			start_month2 = "" + start_month;
		
		if(start_days < 10)
			start_days2 = "0" + start_days;
		else
			start_days2 = "" + start_days;
		
		if(end_month < 10)
			end_month2 = "0" + end_month;
		else
			end_month2 = "" + end_month;
		if(end_days < 10)
			end_days2 = "0" + end_days;
		else
			end_days2 = "" + end_days;
			
		String seasonDate = years_value + "-" + start_month2 + "-" + start_days2 + ";" + years_value + "-" + end_month2 + "-" + end_days2;
		
		
		return seasonDate;

	}
	
	
	/**
	 * 获取2015年1季度的第一天的日期 yyyy-MM-dd
	 * @param year
	 * @param season
	 * @return
	 */
	public static String getFirstDayByYearAndSeason(int year, int season){
		int month = season*3-2;
		String m = month + "";
		if(month < 10)
			m = "0" + month;
		
		return year + "-" + m + "-01";
	}

	/**
	 * 获取2015年1季度的最后一天的日期 yyyy-MM-dd
	 * @param year
	 * @param season
	 * @return
	 */
	public static String getLastDayByYearAndSeason(int year, int season){
		int month = season*3;
		String m = month + "";
		if(month < 10)
			m = "0" + month;
		
		int day = getLastDayOfMonth(year, month);
		
		return year + "-" + m + "-" + day;
	}

	/**
	 * 获取某年某月的最后一天
	 * 
	 * @param year
	 *            年
	 * @param month
	 *            月
	 * @return 最后一天
	 */
	public static int getLastDayOfMonth(int year, int month)
	{
		if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
		{
			return 31;
		}
		if (month == 4 || month == 6 || month == 9 || month == 11)
		{
			return 30;
		}
		if (month == 2)
		{
			if (DateUtils2.isLeapYear(year))
			{
				return 29;
			} else
			{
				return 28;
			}
		}
		return 0;
	}

	/**
	 * 是否闰年
	 * 
	 * @param year
	 *            年
	 * @return
	 */
	public static boolean isLeapYear(int year)
	{
		return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
	}

	
	/**
	 * 本周一 , yyyy-MM-dd
	 * @return
	 */
	public static String getFirstDayOfWeek(){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		return df.format(cal.getTime());
	}
	
	/**
	 * 上周一
	 * @return
	 */
	public static String getFirstDayOfPreWeek(String formatStr){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
		cal.add(Calendar.DAY_OF_MONTH, -7);
		
		if(StringUtils.isEmpty(formatStr))
			formatStr = "yyyy-MM-dd";
			
		SimpleDateFormat df = new SimpleDateFormat(formatStr);
		return df.format(cal.getTime());
	}
	
	/**
	 * 上周日
	 * @return
	 */
	public static String getLastDayOfPreWeek(String formatStr){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
		cal.add(Calendar.DAY_OF_MONTH, -7);
		
		if(StringUtils.isEmpty(formatStr))
			formatStr = "yyyy-MM-dd";
			
		SimpleDateFormat df = new SimpleDateFormat(formatStr);
		return df.format(cal.getTime());
	}

	/**
	 * 本周一 , yyyy-MM-dd
	 * @return
	 */
	public static String getFirstDayOfWeek(String formatStr){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
		
		if(StringUtils.isEmpty(formatStr))
			formatStr = "yyyy-MM-dd";
			
		SimpleDateFormat df = new SimpleDateFormat(formatStr);
		return df.format(cal.getTime());
	}
	
	/**
	 * 本周日
	 * @return
	 */
	public static String getLastDayOfWeek(){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		return df.format(cal.getTime());
	}
	
	/**
	 * 下周一
	 * @return
	 */
	public static String getFirstDayOfNextWeek(){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
		cal.add(Calendar.DAY_OF_MONTH, 7);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		return df.format(cal.getTime());
	}
	
	/**
	 * 下周日
	 * @return
	 */
	public static String getLastDayOfNextWeek(){
		Calendar cal = Calendar.getInstance();
		//设置每周第一天为星期一 (默认是星期日)
		cal.setFirstDayOfWeek(Calendar.MONDAY);
		cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
		cal.add(Calendar.DAY_OF_MONTH, 7);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		return df.format(cal.getTime());
	}
	
	
	//获取包含今年在内的最近5年
	public static List<Integer> getLastFiveYears(){
		List<Integer> list=new ArrayList<Integer>();
		Calendar cal = Calendar.getInstance();
		int year=cal.get(Calendar.YEAR);
		list.add(year-2);
		list.add(year-1);
		list.add(year);
		list.add(year+1);
		list.add(year+2);
		return list;
		
	}
	//获取包含今年在内的最近5年
	public static List<Integer> getMonthOfYear(){
		List<Integer> list=new ArrayList<Integer>();
		for (int i = 1; i <= 12; i++) {
			list.add(i);
		}
		return list;
			
	}

	public static String getCurrentMonth(){
		Date date   = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("MM");// 可以方便地修改日期格式
		String month = dateFormat.format(date);
		return month;
	}
	
	/**
	 * 根据开始和结束时间, 获取标题格式为:2015年4月1日-4月5日
	 * 若年份相同，则只取一个年份
	 * @param startTime 格式: 2015-01-01
	 * @param endTime 格式: 2015-01-01
	 * @return
	 */
	public static String getStartToEnd(String startTime, String endTime) {
		String time = "";
		String[] start = startTime.split("-");
		String[] end = endTime.split("-");
		
		time += start[0] + "年" + Integer.parseInt(start[1]) + "月" + Integer.parseInt(start[2]) + "日-";

		//年份相同，则只取一个年份
		if(! start[0].equals(end[0]))
			time += end[0] + "年";
		
		time += Integer.parseInt(end[1]) + "月" + Integer.parseInt(end[2]) + "日";
		
		return time;
	}

	/**
	 * 昨天的日期
	 * @return
	 */
	public static String getYestoday(){
		Calendar cal = Calendar.getInstance();  
		cal.setTime(new Date());
		cal.add(Calendar.DAY_OF_YEAR, -1); 
		String yestoday = date2String(cal.getTime());
		return yestoday;
	}


	/**
	 * 明天的日期
	 * @return
	 */
	public static String getTomorrow() {
		Calendar cal = Calendar.getInstance();  
		cal.setTime(new Date());
		cal.add(Calendar.DAY_OF_YEAR, +1); 
		String yestoday = date2String(cal.getTime());
		return yestoday;
	}
	
	/**
	 * 获取两个时间之间相差的秒数
	 * @param start
	 * @param end
	 * @return
	 */
	public static Integer getTimeDiff(String start, String end){
		Date starttime = null;
		Date endtime = null;

		starttime = string2Date(start, "yyyy-MM-dd HH:mm:ss");
		if(StringUtils.isEmpty(end)){//如果结束时间为空，则设置为当天日期
			endtime = new Date();
		}else{
			endtime = string2Date(end, "yyyy-MM-dd HH:mm:ss");
		}
		
		long startSecond = starttime.getTime();
		long endSecond = endtime.getTime();
		
		long result = (endSecond - startSecond)/1000;
		Integer diff = Integer.parseInt(result+"");
		
		return diff;
	}
	
	
	
	/**
	 * 根据参数，获得起止时间
	 * @param type  	时间类型，分为y-年，s-季度，m-月
	 * @param year		年
	 * @param season	季度
	 * @param month		月
	 * @return
	 */
	public static String[] getStartAndEndTime(String type, Integer year, Integer season, Integer month){
		String starttime = "";
		String endtime = "";
		
		//获取${year}年第${season}季度的起止时间
		if("s".equals(type)){
			starttime = DateUtils2.getFirstDayByYearAndSeason(year, season) + " 00:00:00";
			endtime = DateUtils2.getLastDayByYearAndSeason(year, season) + " 23:59:59";
		}
		
		//获取${year}年${month}月的起止时间
		else if("m".equals(type)){
			starttime = DateUtils2.getFirstDayOfMonthForCal(year, month) + " 00:00:00";
			endtime = DateUtils2.getLastDayOfMonthForCal(year, month) + " 23:59:59";
		}
		
		//else为默认获取${year}年的起止时间
		else{
			starttime = year + "-01-01 00:00:00";
			endtime = year + "-12-31 23:59:59";
		}
		
		return new String[]{starttime, endtime};
	}
	
	
	/**
	 * 获取指定月的第 index 个周末
	 * @param year
	 * @param month
	 * @param index	
	 * @return
	 */
	public static String getSundayOfMonth(int year, int month, int index){
		Calendar cal = Calendar.getInstance();

		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month - 1);
		cal.set(Calendar.DATE, 1); // 设为第一天

		while(cal.get(Calendar.DAY_OF_WEEK) != Calendar.SUNDAY){
			cal.add(Calendar.DATE, 1);
		}

		//每往后推一个周末，则加7天
		cal.add(Calendar.DATE, (index-1)*7);
		return date2String(cal.getTime());
	}
	
	
	/**
	 * 获取本周的第index个周末
	 * @param index
	 * @return
	 */
	public static String getSundayOfCurrentMonth(int index){
		return getSundayOfMonth(getCurrentYear(), Integer.parseInt(getCurrentMonth()), index);
	}
	
	
	/**
	 * 获取下个月的
	 * @return 
	 */
	public static String getNextMonth(){
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.MONTH, +1); 
		return date2String(cal.getTime());
	}
	
}
