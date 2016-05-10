package com.cnksi.gendoc;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.cnksi.gendoc.annotations.DocAction;
import com.cnksi.gendoc.annotations.DocPara;
import com.cnksi.gendoc.annotations.DocParas;
import com.cnksi.gendoc.annotations.DocResponse;
import com.cnksi.gendoc.model.Col;
import com.cnksi.gendoc.model.ResultAction;

public class DocUtil {
	public static List<Col> getReturnColDoc(String selectSql, IDbQuery dbQuery) {
		List<Col> result = new ArrayList<Col>();

		selectSql = selectSql.toLowerCase();
		String[] block = selectSql.split(" from ");
		if (block.length < 2)
			throw new RuntimeException("sql 语句中必须包含from语句");

		// 列
		String colSql = block[0].trim();
		// System.out.println(colSql);
		colSql = colSql.replace("select", "");
		colSql = colSql.trim();

		List<String> cols = new ArrayList<String>();
		boolean isAllColls = false;
		if (colSql.equals("*")) {
			// 所有的字段
			isAllColls = true;
		} else {
			String[] split = colSql.split(",");
			for (String s : split) {
				cols.add(s.trim());
			}
		}

		// 表
		String tableSql = block[1];
		// System.out.println(tableSql);
		tableSql = tableSql.split(" where ")[0];

		List<String> tables = new ArrayList<String>();
		if (tableSql.contains(",")) { // select * from table1,table2
			String[] split = tableSql.split(",");
			for (String s : split) {
				tables.add(s.trim());
			}
		} else { // select * from table1 left join table2 on ...
			String[] split = tableSql.split(" join ");
			for (String s : split) {
				s = s.split(" on ")[0]; // 去掉on后面的东西
				s = s.trim();

				if (s.endsWith(" left") || s.endsWith(" right") || s.endsWith(" cross") || s.endsWith(" inner")) { // 去掉left，right，cross，inner
					s = s.substring(0, s.length() - 5);
					s = s.trim();
				}
				tables.add(s);
			}
		}

		// 处理表的别名
		List<String> commonCols = new ArrayList<String>();
		List<String> privateCols = new ArrayList<String>();
		for (String s : cols) {
			if (s.indexOf(".") > 0) {
				privateCols.add(s);
			} else {
				commonCols.add(s);
			}
		}

		List<Table> tableList = new ArrayList<Table>();
		for (String t : tables) {
			String[] split = t.split(" ");

			Table table = new Table(split[0]);
			if (split.length > 1) {
				String alis = split[1];
				for (String col : privateCols) {

					String pre = alis + ".";
					if (col.indexOf(pre) > -1) {
						col = col.replaceFirst(pre, "");
						table.getCols().add(col);
					}
				}
			}
			tableList.add(table);
		}

		// 处理每一个table的列
		for (Table table : tableList) {
			String sql = "show full columns from " + table.getName();
			List<Map<String, Object>> records = dbQuery.query(sql);

			if (isAllColls) { // 查询所有列
				for (Map<String, Object> record : records) {

					Col col = new Col(record.get("Field") + "", record.get("Comment") + "");
					result.add(col);
				}
			} else {

				Map<String, Col> map = new HashMap<String, Col>();
				for (Map<String, Object> record : records) {

					String name = record.get("Field") + "";
					Col col = new Col(name, record.get("Comment") + "");
					map.put(name, col);
				}

				for (String s : commonCols) {
					Col col = map.get(s);
					if (col != null) {
						result.add(col);
					}
				}
				for (String s : table.getCols()) {
					Col col = map.get(s);
					if (col != null) {
						result.add(col);
					}
				}
			}
		}

		return result;
	}

	public static ResultAction getResultActionFromMethod(String actionKey, Method method) {
		ResultAction result = null;
		DocAction action = method.getAnnotation(DocAction.class);
		if (action == null) {
			return result;
		}

		DocResponse response = method.getAnnotation(DocResponse.class);

		List<DocPara> paras = new ArrayList<DocPara>();
		Annotation[] annotations = method.getAnnotations();
		for (Annotation annotation : annotations) {
			if (annotation instanceof DocParas) {
				
				DocParas docParas = (DocParas) annotation;
				DocPara[] value = docParas.value();
				if (value != null) {
					
					for (DocPara docPara : value) {
						paras.add(docPara);
					}
				}
			}
		}

		result = new ResultAction(actionKey, action, paras, response);

		return result;
	}
}
