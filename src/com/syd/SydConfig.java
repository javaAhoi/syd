package com.syd;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.JFinal;
import com.jfinal.ext.handler.ContextPathHandler;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;
import com.syd.controller.IndexController;
import com.syd.controller.MovieActController;
import com.syd.controller.MovieAreaController;
import com.syd.controller.MovieController;
import com.syd.controller.MovieLanController;
import com.syd.controller.MovieTypeController;
import com.syd.controller.MovieYearController;
import com.syd.controller.UserController;
import com.syd.entity.Attach;
import com.syd.entity.Movie;
import com.syd.entity.MovieActor;
import com.syd.entity.MovieActor2;
import com.syd.entity.MovieArea;
import com.syd.entity.MovieArea2;
import com.syd.entity.MovieLan;
import com.syd.entity.MovieType;
import com.syd.entity.MovieType2;
import com.syd.entity.MovieYear;
import com.syd.entity.User;
import com.syd.interceptor.MyInterceptor;

/**
 * API引导式配置
 */
public class SydConfig extends JFinalConfig {
	
	/**
	 * 配置常量
	 */
	public void configConstant(Constants me) {
		loadPropertyFile("jfinal.properties");				// 加载少量必要配置，随后可用getProperty(...)获取值
		me.setDevMode(getPropertyToBoolean("devMode", false));
		me.setEncoding("UTF-8");

		//处理错误页面
		me.setError500View("/jsp/common/500.jsp");
		me.setError404View("/jsp/common/404.jsp");
		
		me.setViewType(ViewType.JSP);
		me.setBaseViewPath("/jsp/");
	}
	
	/**
	 * 配置路由
	 */
	public void configRoute(Routes me) {
		me.add("/", IndexController.class, "/");	
		me.add("/user", UserController.class, "/user");	
		me.add("/movie", MovieController.class, "/movie");	
		me.add("/movieAct", MovieActController.class, "/movieAct");	
		me.add("/movieType", MovieTypeController.class, "/movieType");	
		me.add("/movieArea", MovieAreaController.class, "/movieArea");	
		me.add("/movieLan", MovieLanController.class, "/movieLan");	
		me.add("/movieYear", MovieYearController.class, "/movieYear");	
		
		
		
	}
	
	/**
	 * 配置插件
	 */
	public void configPlugin(Plugins me) {
		// 配置C3p0数据库连接池插件
		C3p0Plugin c3p0Plugin = new C3p0Plugin(getProperty("jdbcUrl"), getProperty("user"), getProperty("password").trim());
		me.add(c3p0Plugin);
		
		
		// 配置ActiveRecord插件
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		arp.setShowSql(getPropertyToBoolean("showSql", true));
		arp.setDevMode(true);
		me.add(arp);
		
		
		arp.addMapping("syd_movie", Movie.class);
		arp.addMapping("syd_movie_actor", MovieActor.class);
		arp.addMapping("syd_movie_act_2_m", MovieActor2.class);
		arp.addMapping("syd_movie_type", MovieType.class);
		arp.addMapping("syd_movie_type_2_m", MovieType2.class);
		arp.addMapping("syd_movie_area", MovieArea.class);
		arp.addMapping("syd_movie_area_2_m", MovieArea2.class);
		arp.addMapping("syd_movie_language", MovieLan.class);
		arp.addMapping("syd_movie_year", MovieYear.class);
		arp.addMapping("syd_user", User.class);
		arp.addMapping("syd_movie_attach", Attach.class);
		
		
		
		
	}
	
	
	
	
	
	
	/**
	 * 配置全局拦截器
	 */
	public void configInterceptor(Interceptors me) {
		me.add(new MyInterceptor());
	}
	
	/**
	 * 配置处理器
	 */
	public void configHandler(Handlers me) {
		me.add(new ContextPathHandler("BASE_PATH"));
	}
	
	/**
	 * 建议使用 JFinal 手册推荐的方式启动项目
	 * 运行此 main 方法可以启动项目，此main方法可以放置在任意的Class类定义中，不一定要放于此
	 */
	public static void main(String[] args) {
		JFinal.start("WebRoot", 82, "/", 5);
	}
}
