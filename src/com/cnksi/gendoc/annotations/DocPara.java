package com.cnksi.gendoc.annotations;

import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@Inherited
public @interface DocPara {

	/**
	 * 参数名称
	 * @return
	 */
	String name();
	/**
	 * 参数说明
	 * @return
	 */
	String comment();
	/**
	 * 参数类型
	 * @return
	 */
	String type() default "string";
	/**
	 * 参数的示例值
	 * @return
	 */
	String exampleValue();
	
}