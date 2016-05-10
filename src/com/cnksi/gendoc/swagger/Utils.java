package com.cnksi.gendoc.swagger;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

@SuppressWarnings("unchecked")
public class Utils {
	public static String readFile(URL url) {
		StringBuilder result = new StringBuilder();
		
		BufferedReader reader =null;
		try {
			URLConnection urlConnection = url.openConnection();
			InputStream inputStream = urlConnection.getInputStream();
			reader = new BufferedReader(new InputStreamReader(inputStream, "utf-8"));
			
			String tempString = null;
			while ((tempString = reader.readLine()) != null) {
				result.append(tempString + "\n");
			}
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e1) {
				}
			}
		}
		return result.toString();
	}

	/**
	 * 去取配置文件
	 * 
	 * @param file
	 *            文件的名称
	 * @param clazz
	 *            和配置文件相同目录的class
	 * @return
	 */
	public static Map<String, Object> getConfig(String file, Class<? extends Object> clazz) {
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			URL url = clazz.getResource(file);

			String json = Utils.readFile(url);

			ObjectMapper mapper = new ObjectMapper();

			result = mapper.readValue(json, Map.class);

		} catch (Exception e) {
			e.printStackTrace(System.out);
		}

		return result;
	}

	public static void main(String[] args) {

		Map<String, Object> defaultConfig = getConfig("swagger.json", Utils.class);

		Map<String, Object> info = (Map<String, Object>) defaultConfig.get("info");

		System.out.println(info.get("title"));

		System.out.println(defaultConfig);
	}

}
