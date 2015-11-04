package com.syd.shiro;

import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.syd.entity.User;


/**
 * @author FHC
 * @文件名: ShiroAuthorizingRealm.java
 * @类路径: com.syd.shiro
 * @描述: shiro的认证授权域
 * @时间: 2015年10月29日下午11:24:26
 */
public class ShiroAuthorizingRealm extends AuthorizingRealm {
	private static Logger log = LoggerFactory.getLogger(ShiroAuthorizingRealm.class);

	/**
	 * 构造函数，设置安全的初始化信息
	 */
	public ShiroAuthorizingRealm() {
		super();
		setAuthenticationTokenClass(UsernamePasswordToken.class);
		// HashedCredentialsMatcher matcher = new HashedCredentialsMatcher(User.HASH_ALGORITHM);
		// matcher.setHashIterations(User.HASH_INTERATIONS);
		// setCredentialsMatcher(matcher);
		setCredentialsMatcher(new CustomCredentialsMatcher());

	}

	/**
	 * 获取当前认证实体的授权信息（授权包括：角色、权限）
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		// 获取当前登录的用户名
		ShiroPrincipal subject = (ShiroPrincipal) super.getAvailablePrincipal(principals);
		String username = subject.getUsername();
		// Integer userId = subject.getId();
		try {
			if (!subject.isAuthorized()) {
				// 根据用户名称，获取该用户所有的权限列表
				// List<String> authorities = User.dao.getAuthoritiesName(userId);
				// List<String> rolelist = User.dao.getRolesName(userId);
				// subject.setAuthorities(authorities);
				// subject.setRoles(rolelist);
				// subject.setAuthorized(true);
				log.info("用户【" + username + "】授权初始化成功......");
				// log.info("用户【" + username + "】 权限列表为：" + subject.getAuthorities());
			}
		} catch (RuntimeException e) {
			throw new AuthorizationException("用户【" + username + "】授权失败");
		}
		// 给当前用户设置权限
		// info.addStringPermissions(subject.getAuthorities());
		return info;
	}

	/**
	 * 根据认证方式（如表单）获取用户名称、密码
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		UsernamePasswordToken upToken = (UsernamePasswordToken) token;
		String username = upToken.getUsername();
		if (username == null) {
			log.warn("用户名不能为空");
			throw new AccountException("用户名不能为空");
		}

		User user =null;
		try {
			user = User.dao.getByUsername(username);	
		} catch (Exception ex) {
			log.warn("获取用户失败\n" + ex.getMessage());
		}
		if (user == null) {
			log.warn("用户不存在");
			throw new UnknownAccountException("用户不存在");
		}
		// if (user.get("enabled") == null || "2".equals(user.get("enabled"))) {
		// log.warn("用户被禁止使用");
		// throw new UnknownAccountException("用户被禁止使用");
		// }
		log.info("用户【" + username + "】登录成功");
		// byte[] salt = EncodeUtils.hexDecode(user.getStr("salt"));
		ShiroPrincipal subject = new ShiroPrincipal(user);
		// List<String> authorities = User.dao.getAuthoritiesName(user.getInt("id"));
		// List<String> rolelist = User.dao.getRolesName(user.getInt("id"));
		// subject.setAuthorities(authorities);
		// subject.setRoles(rolelist);
		subject.setAuthorized(true);
		return new SimpleAuthenticationInfo(subject, user.get("password"), null, getName());
	}
}
