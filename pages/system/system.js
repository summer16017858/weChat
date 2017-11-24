	'use strict';

	var app = getApp();

	Page({
	    loginOut: function loginOut() {
	        wx.removeStorage({
	            key: 'JSESSIONID',
	            success: function success(res) {
	                wx.redirectTo({ url: '../login/login' });
	            }
	        });
	    }

	});