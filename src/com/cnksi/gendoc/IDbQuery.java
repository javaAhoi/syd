package com.cnksi.gendoc;

import java.util.List;
import java.util.Map;

public interface IDbQuery {

	List<Map<String, Object>> query(String sql);

}
