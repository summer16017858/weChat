'use strict';

	function hint(msg) {
	    var headline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

	    wx.showModal({
	        title: headline,
          showError:false,
	        content: msg,
	        success: function success(res) {
	            if (res.confirm) {
	                console.log('用户点击确定');
	            }
	        }
	    });
	}

	function setTitle(text) {
	    wx.setNavigationBarTitle({ title: text });
	    console.log(text);
	}

	function dateFormat(date, fmt) {
	    if (!isNaN(date) && date != null) {
	        var str = new Date(date);
	        var obj = {
	            'M+': str.getMonth() + 1,
	            'd+': str.getDate(),
	            'h+': str.getHours(),
	            'm+': str.getMinutes(),
	            's+': str.getSeconds(),
	            'q+': Math.floor((str.getMonth() + 3) / 3),
	            'S': str.getMilliseconds()
	        };
	        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (str.getFullYear() + '').substr(4 - RegExp.$1.length));
	        for (var k in obj) {
	            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? obj[k] : ('00' + obj[k]).substr(('' + obj[k]).length));
	        }return fmt;
	    } else {
	        return '';
	    }
	}
	/**
	* 数字千分位
	* @param {number} value - 数字
	* @returns {string}
	*/
	function thousands(value) {
	    if (!isNaN(value) && value != null) {
	        var s = parseFloat((value + '').replace(/[^\d.-]/g, '')) + '';
	        var l = s.split('.')[0].split('').reverse();
	        var t = '';
	        for (var i = 0; i < l.length; i++) {
	            t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
	        }
	        return t.split('').reverse().join('');
	    } else {
	        return '0';
	    }
	}
	/**
	 * 数字千分位保留两位小数点
	 * @param {number} value - 数字
	 * @returns {string}
	 */

	function formatMoney(value) {
	    if (!isNaN(value) && value != null) {
	        var num = parseFloat(value).toFixed(2);
	        var regx = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
	        return num.replace(regx, "$1,");
	    } else {
	        return '0.00';
	    }
	}
	/**
	 * 小数点转百分号
	 * @param {number} value - 小数点
	 * @returns {string}
	 */
	function toPercent(value) {
	    var newValue = '',
	        digit = 4;

	    !isNaN(value) && value != null ? newValue = (value * 100).toFixed(digit) : newValue = 0 .toFixed(digit) + '%';
	    return newValue;
	}

	function tonIteger(value) {
	    var newValue = '',
	        digit = 0;

	    !isNaN(value) && value != null ? newValue = (value * 100000000).toFixed(digit) : newValue = 0 .toFixed(digit);
	    return newValue;
	}

	/**
	 * 小数点后保留固定位数
	 * @param {number} value - 数字
	 * @returns {string}
	 */
	function keepDecimal(value) {
	    var newValue = '',
	        digit = 4;

	    !isNaN(value) && value != null ? newValue = value.toFixed(digit) : newValue = 0 .toFixed(digit);
	    return newValue;
	}

	module.exports.hint = hint;
	exports.setTitle = setTitle;
	exports.dateFormat = dateFormat;
	exports.thousands = thousands;
	exports.formatMoney = formatMoney;
	exports.toPercent = toPercent;
	exports.keepDecimal = keepDecimal;
	exports.tonIteger = tonIteger;