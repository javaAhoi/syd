package com.syd.shiro;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;

/**
 * @author FHC
 * @文件名: CustomCredentialsMatcher.java
 * @类路径: com.syd.shiro
 * @描述: 自定义密码验证(取消验证)
 * @时间: 2015年10月29日下午11:25:24
 */
public class CustomCredentialsMatcher extends SimpleCredentialsMatcher {
	@Override
	public boolean doCredentialsMatch(AuthenticationToken authcToken, AuthenticationInfo info) {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;

		Object tokenCredentials = String.valueOf(token.getPassword()); // encrypt(String.valueOf(token.getPassword()));
		Object accountCredentials = getCredentials(info).toString();
		// 将密码加密与系统加密后的密码校验，内容一致就返回true,不一致就返回false
		return equals(tokenCredentials, accountCredentials);
	}

	// 将传进来密码加密方法
	// private String encrypt(String data) {
	// String sha384Hex = new Sha384Hash(data).toBase64();// 这里可以选择自己的密码验证方式 比如 md5或者sha256等
	// return sha384Hex;
	// }

}
